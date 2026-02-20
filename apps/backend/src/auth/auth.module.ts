import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';
import { TokenModule } from '../token/token.module.js';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy.js';
import { SessionCleanupService } from '../session/session-cleanup.service.js';
import { PasswordResetService } from './password-reset/password-reset.service.js';
import { EmailModule } from '../email/email.module.js';
import { SessionService } from '../session/session.service.js';
import { PasswordResetCleanupService } from './password-reset/password-reset-cleanup.service.js';

@Module({
  imports: [
    PrismaModule,
    TokenModule,
    EmailModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    SessionService,
    SessionCleanupService,
    PasswordResetService,
    PasswordResetCleanupService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
