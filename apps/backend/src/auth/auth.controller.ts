import { Body, Controller, Post, Req } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { TokenService } from '../token/token.service.js';
import { Public } from './decorators/public.decorator.js';
import { CurrentUser } from './decorators/current-user.decorator.js';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
  ) {}

  @Public()
  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User registered successfully' })
  @ApiResponse({ status: 400, description: 'Validation failed' })
  async register(@Body() data: RegisterDto) {
    return this.authService.register(data);
  }

  @Public()
  @Post('login')
  @ApiOperation({ summary: 'Login user and return tokens' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 200,
    description: 'Login successful',
  })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  async login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  @Public()
  @Post('refresh')
  @ApiOperation({ summary: 'Refresh access token using refresh token' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        refreshToken: {
          type: 'string',
          example: 'refresh-token-string',
        },
      },
      required: ['refreshToken'],
    },
  })
  @ApiResponse({
    status: 200,
    description: 'New access token generated',
  })
  @ApiResponse({ status: 401, description: 'Invalid or expired refresh token' })
  async refresh(@Body('refreshToken') refreshToken: string) {
    return this.tokenService.refreshTokens(refreshToken);
  }

  @Post('logout')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Logout user and revoke refresh tokens' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        userId: {
          type: 'string',
          example: 'uuid-of-user',
        },
      },
      required: ['userId'],
    },
  })
  @ApiResponse({ status: 200, description: 'Logged out successfully' })
  async logout(@CurrentUser() user: { id: string }) {
    await this.authService.logout(user.id);
    return { message: 'Logged out successfully' };
  }
}
