import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { EmailService } from '../../email/email.service.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { SessionService } from '../../session/session.service.js';
import { ResetPasswordDto } from '../dto/reset-password.dto.js';

@Injectable()
export class PasswordResetService {
  private readonly TOKEN_EXPIRATION_HOURS = 1;

  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
    private sessionService: SessionService,
  ) {}

  async requestPasswordReset(email: string): Promise<{ message: string }> {
    // Find user by email
    const user = await this.prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    // Don't reveal if user exists (security best practice)
    if (!user) {
      return {
        message:
          'If an account exists with this email, you will receive a password reset link.',
      };
    }

    // Check if user is active
    if (!user.isActive) {
      return {
        message:
          'If an account exists with this email, you will receive a password reset link.',
      };
    }

    // Generate secure random token
    const resetToken = this.generateSecureToken();

    // Hash token before storing (security best practice)
    const hashedToken = await bcrypt.hash(resetToken, 10);

    // Calculate expiration time
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + this.TOKEN_EXPIRATION_HOURS);

    // Invalidate any existing reset tokens for this user
    await this.prisma.passwordReset.updateMany({
      where: {
        userId: user.id,
        usedAt: null,
        expiresAt: { gt: new Date() },
      },
      data: {
        expiresAt: new Date(), // Expire immediately
      },
    });

    // Create new reset token
    await this.prisma.passwordReset.create({
      data: {
        userId: user.id,
        token: hashedToken,
        expiresAt,
      },
    });

    // Send reset email
    try {
      await this.emailService.sendPasswordResetEmail(
        user.email,
        user.firstName,
        resetToken, // Send unhashed token in email
      );
    } catch (error) {
      console.error('Failed to send password reset email:', error);
      // Don't throw error to avoid revealing if user exists
    }

    return {
      message:
        'If an account exists with this email, you will receive a password reset link.',
    };
  }

  async verifyResetToken(
    token: string,
  ): Promise<{ valid: boolean; email?: string; message?: string }> {
    // Get active reset token of user
    const reset = await this.prisma.passwordReset.findFirst({
      where: {
        usedAt: null,
        expiresAt: { gt: new Date() },
        token,
      },
      include: {
        user: {
          select: {
            email: true,
            isActive: true,
          },
        },
      },
    });

    if (!reset) {
      return {
        valid: false,
        message: 'Invalid or expired password reset token.',
      };
    }
    // Check if its valid
    const isValid = await bcrypt.compare(token, reset?.token);

    if (isValid && reset.user.isActive) {
      return {
        valid: true,
        email: reset.user.email,
      };
    }
    return { valid: false };
  }

  async resetPassword(
    token: string,
    newPassword: string,
  ): Promise<{ message: string }> {
    // Get active password reset token
    const reset = await this.prisma.passwordReset.findFirst({
      where: {
        token,
        usedAt: null,
        expiresAt: { gt: new Date() },
      },
      include: {
        user: true,
      },
    });

    if (!reset) {
      return {
        message: 'Invalid or expired password reset token.',
      };
    }

    const isValid = await bcrypt.compare(token, reset.token);

    if (!isValid) {
      throw new BadRequestException('Invalid or expired reset token');
    }

    if (isValid && !reset.user.isActive) {
      throw new UnauthorizedException('Account is disabled');
    }

    // Hash new password
    const passwordHash = await bcrypt.hash(newPassword, 10);

    // Update user password
    await this.prisma.user.update({
      where: { id: reset.userId },
      data: { passwordHash },
    });

    // Mark token as used
    await this.prisma.passwordReset.update({
      where: { id: reset.id },
      data: { usedAt: new Date() },
    });

    // Revoke all active sessions (force re-login)
    await this.sessionService.revokeAllSessions(reset.user.id);

    // Send confirmation email
    try {
      await this.emailService.sendPasswordChangedEmail(
        reset.user.email,
        reset.user.firstName,
      );
    } catch (error) {
      console.error('Failed to send password changed email:', error);
    }

    return {
      message:
        'Password reset successful. Please log in with your new password.',
    };
  }

  async cleanupExpiredTokens(): Promise<{ deletedCount: number }> {
    const result = await this.prisma.passwordReset.deleteMany({
      where: {
        OR: [
          { expiresAt: { lt: new Date() } }, // Expired
          { usedAt: { not: null } }, // Already used
        ],
      },
    });

    return { deletedCount: result.count };
  }

  private generateSecureToken(): string {
    return crypto.randomBytes(32).toString('hex'); // 64 character hex string
  }
}
