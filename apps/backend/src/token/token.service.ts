import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private prisma: PrismaService,
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

  async saveRefreshToken(userId: string, token: string) {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

    await this.prisma.refreshToken.create({
      data: {
        token,
        userId,
        expiresAt,
      },
    });
  }

  async refreshTokens(refreshToken: string) {
    try {
      // Verify refresh token
      const payload: { sub: string; email: string; role: string } =
        await this.jwtService.verifyAsync(refreshToken, {
          secret: this.configService.get('JWT_REFRESH_SECRET'),
        });

      // Check if refresh token exists in database
      const storedToken = await this.prisma.refreshToken.findUnique({
        where: { token: refreshToken },
        include: { user: true },
      });

      if (!storedToken) {
        throw new UnauthorizedException('Invalid refresh token');
      }
      if (!storedToken.user.isActive) {
        throw new UnauthorizedException('Account is disabled');
      }

      if (storedToken.user.id !== payload.sub) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const now = new Date();
      const isExpired = now > storedToken.expiresAt;

      const timeLeft = storedToken.expiresAt.getTime() - now.getTime();

      // Define threshold: rotate if less than 1 day remaining
      const rotationThreshold = 24 * 60 * 60 * 1000; // 1 day in ms
      const shouldRotate = timeLeft < rotationThreshold;
      if (isExpired) {
        await this.prisma.refreshToken.delete({
          where: { id: storedToken.id },
        });
        throw new UnauthorizedException('Refresh token expired');
      }
      if (shouldRotate) {
        // Generate new tokens
        const tokens = await this.generateTokens(
          storedToken.user.id,
          storedToken.user.email,
          storedToken.user.role,
        );

        // Delete old refresh token
        await this.prisma.refreshToken.delete({
          where: { id: storedToken.id },
        });

        // Save new refresh token
        await this.saveRefreshToken(storedToken.user.id, tokens.refreshToken);

        return {
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
          rotated: true, // Optional: tell frontend token was rotated
        };
      }

      const newAccessToken = await this.jwtService.signAsync(
        {
          sub: storedToken.user.id,
          email: storedToken.user.email,
          role: storedToken.user.role,
        },
        {
          secret: this.configService.get('JWT_SECRET'),
          expiresIn: this.configService.get('JWT_EXPIRATION') || '15m',
        },
      );

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
