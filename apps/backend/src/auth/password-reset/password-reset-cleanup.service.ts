import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PasswordResetService } from './password-reset.service.js';

@Injectable()
export class PasswordResetCleanupService {
  private readonly logger = new Logger(PasswordResetCleanupService.name);

  constructor(private passwordResetService: PasswordResetService) {}

  // Run every day at 3:30 AM
  @Cron(CronExpression.EVERY_DAY_AT_3AM)
  async handleCleanup() {
    this.logger.log('Starting password reset token cleanup...');

    try {
      const result = await this.passwordResetService.cleanupExpiredTokens();
      this.logger.log(
        `Cleanup completed: ${result.deletedCount} tokens removed`,
      );
    } catch (error) {
      this.logger.error('Password reset cleanup failed:', error);
    }
  }
}
