import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  async register(data) {
    return this.prismaService.user.create({ data });
  }
}
