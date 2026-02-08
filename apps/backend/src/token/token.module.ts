import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module.js';
import { TokenService } from './token.service.js';

@Module({
  imports: [JwtModule.register({}), ConfigModule.forRoot(), PrismaModule],
  controllers: [],
  providers: [TokenService],
  exports: [TokenService, JwtModule, ConfigModule],
})
export class TokenModule {}
