import { Module } from '@nestjs/common';
import { EmailService } from './email.service.js';
import { EmailController } from './email.controller.js';

@Module({
  exports: [EmailService],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
