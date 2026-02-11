import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { SessionService } from './session.service.js';

@Injectable()
export class SessionCleanupService {
  private readonly logger = new Logger(SessionCleanupService.name);

  constructor(private sessionService: SessionService) {}

  // Run daily at 3 AM
  @Cron(CronExpression.EVERY_DAY_AT_3AM)
  async handleSessionCleanup() {
    this.logger.log('Starting session cleanup...');

    try {
      const result = await this.sessionService.cleanupExpiredSessions();

      this.logger.log(
        `Session cleanup completed: ${result.totalCleaned} sessions removed ` +
          `(${result.expiredSessions} expired, ${result.inactiveSessions} inactive)`,
      );
    } catch (error) {
      this.logger.error('Session cleanup failed:', error);
    }
  }

  // Manual cleanup trigger (for testing)
  async triggerManualCleanup() {
    return this.sessionService.cleanupExpiredSessions();
  }
}
