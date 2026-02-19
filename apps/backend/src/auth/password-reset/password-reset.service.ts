import { Injectable } from '@nestjs/common';
import { EmailService } from '../../email/email.service.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { SessionService } from '../../session/session.service.js';

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

  private generateSecureToken(): string {
    return crypto.randomBytes(32).toString('hex'); // 64 character hex string
  }
}
