import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service.js';
import { UAParser } from 'ua-parser-js';

export interface SessionMetadata {
  ipAddress: string;
  userAgent: string;
}
export interface SessionInfo {
  id: string;
  deviceName: string;
  deviceType: string;
  browser: string;
  os: string;
  ipAddress: string;
  lastActiveAt: Date;
  createdAt: Date;
  isCurrent: boolean;
}

@Injectable()
export class SessionService {
  private readonly MAX_SESSIONS_PER_USER: number;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {
    this.MAX_SESSIONS_PER_USER =
      this.configService.get<number>('MAX_SESSIONS_PER_USER') || 5;
  }

  // Create a new session for the user, enforcing the maximum sessions limit
  async createSession(
    userId: string,
    refreshToken: string,
    metadata: SessionMetadata,
  ) {
    const parser = new UAParser(metadata.userAgent);
    const device = parser.getDevice();
    const browser = parser.getBrowser();
    const os = parser.getOS();

    let deviceType = 'desktop';
    if (device.type === 'mobile') deviceType = 'mobile';
    else if (device.type === 'tablet') deviceType = 'tablet';

    const deviceName = this.generateDeviceName(device, browser, os);

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

    // Check if we need to enforce max sessions
    await this.enforceMaxSessions(userId);

    // Create the session
    const session = await this.prisma.session.create({
      data: {
        userId,
        deviceName,
        deviceType,
        refreshToken,
        browser: browser.name || 'Unknown',
        browserVersion: browser.version || 'Unknown',
        os: os.name || 'Unknown',
        osVersion: os.version || 'Unknown',
        ipAddress: metadata.ipAddress,
        userAgent: metadata.userAgent,
        expiresAt,
        createdAt: new Date(),
      },
    });
    return session;
  }

  //   Update session activity timestamp
  async updateSessionActivity(refreshToken: string) {
    await this.prisma.session.update({
      where: { refreshToken },
      data: { lastActiveAt: new Date() },
    });
  }

  // Get all active sessions for a user
  async getUserSessions(
    userId: string,
    currentRefreshToken?: string,
  ): Promise<SessionInfo[]> {
    const sessions = await this.prisma.session.findMany({
      where: {
        userId,
        isActive: true,
        expiresAt: {
          gt: new Date(), // Only non-expired sessions
        },
      },
      orderBy: {
        lastActiveAt: 'desc',
      },
    });

    return sessions.map((session) => ({
      id: session.id,
      deviceName: session.deviceName || 'Unknown Device',
      deviceType: session.deviceType || 'desktop',
      browser: session.browser || 'Unknown',
      os: session.os || 'Unknown',
      ipAddress: session.ipAddress,
      lastActiveAt: session.lastActiveAt,
      createdAt: session.createdAt,
      isCurrent: currentRefreshToken
        ? session.refreshToken === currentRefreshToken
        : false,
    }));
  }

  // Revoke a specific session by its ID
  async revokeSession(userId: string, sessionId: string) {
    const session = await this.prisma.session.findFirst({
      where: {
        id: sessionId,
        userId,
      },
    });

    if (!session) {
      throw new UnauthorizedException('Session not found');
    }

    await this.prisma.session.delete({
      where: { id: sessionId },
    });

    return { message: 'Session revoked successfully' };
  }
  // Revoke all other sessions except the current one
  async revokeAllOtherSessions(userId: string, currentRefreshToken: string) {
    const result = await this.prisma.session.deleteMany({
      where: {
        userId,
        refreshToken: {
          not: currentRefreshToken,
        },
      },
    });

    return {
      message: 'All other sessions revoked successfully',
      revokedCount: result.count,
    };
  }

  // Revoke all sessions for the user (e.g., on password change)
  async revokeAllSessions(userId: string) {
    const result = await this.prisma.session.deleteMany({
      where: { userId },
    });

    return {
      message: 'All sessions revoked successfully',
      revokedCount: result.count,
    };
  }

  // Cleanup expired sessions (can be called periodically via a cron job)
  async cleanupExpiredSessions() {
    const now = new Date();

    // Delete expired sessions
    const expiredResult = await this.prisma.session.deleteMany({
      where: {
        expiresAt: {
          lt: now,
        },
      },
    });

    // Delete inactive sessions (no activity in 30 days)
    const inactiveThreshold = new Date();
    inactiveThreshold.setDate(inactiveThreshold.getDate() - 30);

    const inactiveResult = await this.prisma.session.deleteMany({
      where: {
        lastActiveAt: {
          lt: inactiveThreshold,
        },
      },
    });

    return {
      expiredSessions: expiredResult.count,
      inactiveSessions: inactiveResult.count,
      totalCleaned: expiredResult.count + inactiveResult.count,
    };
  }
  // Enforce maximum sessions per user by deleting the oldest session if limit is exceeded
  private async enforceMaxSessions(userId: string) {
    const sessionCount = await this.prisma.session.count({
      where: {
        userId,
        isActive: true,
      },
    });

    if (sessionCount >= this.MAX_SESSIONS_PER_USER) {
      // Delete oldest session
      const oldestSession = await this.prisma.session.findFirst({
        where: {
          userId,
          isActive: true,
        },
        orderBy: {
          lastActiveAt: 'asc',
        },
      });

      if (oldestSession) {
        await this.prisma.session.delete({
          where: { id: oldestSession.id },
        });
      }
    }
  }

  async validateSession(refreshToken: string) {
    const session = await this.prisma.session.findUnique({
      where: { refreshToken },
      include: { user: true },
    });

    if (!session) {
      throw new UnauthorizedException('Invalid session');
    }

    if (!session.isActive) {
      throw new UnauthorizedException('Session is no longer active');
    }

    if (new Date() > session.expiresAt) {
      await this.prisma.session.delete({
        where: { id: session.id },
      });
      throw new UnauthorizedException('Session expired');
    }

    if (!session.user.isActive) {
      throw new UnauthorizedException('Account is disabled');
    }

    return session;
  }

  private generateDeviceName(
    device: UAParser.IDevice,
    browser: UAParser.IBrowser,
    os: UAParser.IOS,
  ): string {
    const parts: string[] = [];

    // Add browser
    if (browser.name) {
      parts.push(browser.name);
    }

    // Add OS
    if (os.name) {
      parts.push(`on ${os.name}`);
    }

    // Add device model if mobile/tablet
    if (device.model) {
      parts.push(`(${device.model})`);
    }

    return parts.length > 0 ? parts.join(' ') : 'Unknown Device';
  }
}
