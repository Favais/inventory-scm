import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
import { SessionService } from '../session/session.service.js';
import type { SessionMetadata } from '../session/session.service.js';

@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private prisma: PrismaService,
    private sessionService: SessionService,
  ) {}

  async generateTokens(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get('JWT_SECRET'),
        expiresIn: this.configService.get('JWT_EXPIRATION') || '15m',
      }),
      this.jwtService.signAsync(payload, {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
        expiresIn: this.configService.get('JWT_REFRESH_EXPIRATION') || '7d',
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async createSessionWithTokens(
    userId: string,
    email: string,
    role: string,
    metadata: SessionMetadata,
  ) {
    // Generate tokens
    const tokens = await this.generateTokens(userId, email, role);

    // Create session with metadata
    await this.sessionService.createSession(
      userId,
      tokens.refreshToken,
      metadata,
    );

    return tokens;
  }

  async refreshSessionWithToken(
    refreshToken: string,
    metadata: SessionMetadata,
  ) {
    try {
      // Verify session token
      const session = await this.sessionService.validateSession(refreshToken);

      const now = new Date();
      const timeLeft = session.expiresAt.getTime() - now.getTime();
      const rotationThreshold = 24 * 60 * 60 * 1000; // 1 day
      const shouldRotate = timeLeft < rotationThreshold;

      if (shouldRotate) {
        // Generate new tokens
        const tokens = await this.createSessionWithTokens(
          session.userId,
          session.user.email,
          session.user.role,
          metadata,
        );
        // Revoke old session
        await this.sessionService.revokeSession(session.userId, session.id);

        return {
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
          rotated: true, // Optional: tell frontend token was rotated
        };
      }

      const newAccessToken = await this.jwtService.signAsync(
        {
          sub: session.user.id,
          email: session.user.email,
          role: session.user.role,
        },
        {
          secret: this.configService.get('JWT_SECRET'),
          expiresIn: this.configService.get('JWT_EXPIRATION') || '15m',
        },
      );

      // Update session activity
      await this.sessionService.updateSessionActivity(refreshToken);

      return {
        accessToken: newAccessToken,
        refreshToken: refreshToken, // Keep same refresh token
        rotated: false, // Optional: tell frontend token was NOT rotated
      };
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
