import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { RegisterDto } from './dto/register.dto.js';
import bcrypt from 'bcrypt';
import { TokenService } from '../token/token.service.js';
import { LoginDto } from './dto/login.dto.js';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private tokenService: TokenService,
  ) {}
  async register(data: RegisterDto) {
    const existingUser = await this.prismaService.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(data.password, saltRounds);

    const { password, ...rest } = data;
    const user = await this.prismaService.user.create({
      data: { ...rest, passwordHash },
    });

    // Generate tokens
    const tokens = await this.tokenService.generateTokens(
      user.id,
      user.email,
      user.role,
    );

    //save refresh token
    await this.tokenService.saveRefreshToken(user.id, tokens.refreshToken);

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    };
  }

  async login(data: LoginDto) {
    console.log(data);

    const user = await this.validateUser(data.email, data.password);

    if (!user) {
      throw new ConflictException('Invalid email or password');
    }

    // Check if user is active
    if (!user.isActive) {
      throw new UnauthorizedException('Account is disabled');
    }

    // Update last login
    await this.prismaService.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    // Generate tokens
    const tokens = await this.tokenService.generateTokens(
      user.id,
      user.email,
      user.role,
    );

    // Save refresh token
    await this.tokenService.saveRefreshToken(user.id, tokens.refreshToken);

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    };
  }

  async logout(userId: string) {
    // Delete all refresh tokens for this user
    await this.prismaService.refreshToken.deleteMany({
      where: { userId },
    });

    return { message: 'Logged out successfully' };
  }
  async validateUser(email: string, password: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      return null;
    }

    return user;
  }
}
