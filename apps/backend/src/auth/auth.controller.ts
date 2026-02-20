import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Ip,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
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
import type { Response, Request } from 'express';
import { SessionService } from '../session/session.service.js';
import { PasswordResetService } from './password-reset/password-reset.service.js';
import {
  RequestPasswordResetDto,
  ResetPasswordDto,
} from './dto/reset-password.dto.js';
@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
    private readonly sessionService: SessionService,
    private passwordResetService: PasswordResetService,
  ) {}
  private getSessionMetadata(req: Request, ip: string) {
    return {
      ipAddress: ip || 'unknown',
      userAgent: (req.headers['user-agent'] as string) || 'unknown',
    };
  }
  @Public()
  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User registered successfully' })
  @ApiResponse({ status: 400, description: 'Validation failed' })
  async register(
    @Body() data: RegisterDto,
    @Req() req: Request,
    @Ip() ip: string,
  ) {
    const metadata = this.getSessionMetadata(req, ip);
    return this.authService.register(data, metadata);
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
  async login(
    @Body() data: LoginDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @Ip() ip: string,
  ) {
    const metadata = this.getSessionMetadata(req, ip);
    const result = await this.authService.login(data, metadata);
    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return res.json({
      accessToken: result.accessToken,
      user: result.user,
    });
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
  async refresh(
    @Body('refreshToken') sessionRefreshToken: string,
    @Req() req: Request,
    @Ip() ip: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshToken =
      (req.cookies['refreshToken'] as string) || sessionRefreshToken;

    const metadata = this.getSessionMetadata(req, ip);
    const result = await this.tokenService.refreshSessionWithToken(
      refreshToken,
      metadata,
    );
    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return res.json({
      accessToken: result.accessToken,
      rotated: result.rotated,
    });
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
  async logout(
    @CurrentUser() user: { id: string },
    @Body('sessionId') sessionId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.logout(user.id, sessionId);
    res.clearCookie('refreshToken', {
      httpOnly: true,
      sameSite: 'strict',
      secure: true, // true in production (HTTPS)
      path: '/',
    });
    return { message: 'Logged out successfully' };
  }

  @Get('sessions')
  async getSessions(@CurrentUser() user: { id: string }, @Req() req: Request) {
    const refreshToken = req.cookies['refreshToken'] as string;
    return this.sessionService.getUserSessions(user.id, refreshToken);
  }

  @Delete('sessions/:sessionId')
  @HttpCode(HttpStatus.OK)
  async revokeSession(
    @CurrentUser() user: { id: string },
    @Param('sessionId') sessionId: string,
  ) {
    return this.sessionService.revokeSession(user.id, sessionId);
  }

  @Post('sessions/revoke-others')
  @HttpCode(HttpStatus.OK)
  async revokeOtherSessions(
    @CurrentUser() user: any,
    @Req() req: Request,
    @Body('refreshToken') sessionRefreshToken: string,
  ) {
    const refreshToken =
      (req.cookies['refreshToken'] as string) || sessionRefreshToken;
    return this.sessionService.revokeAllOtherSessions(user.id, refreshToken);
  }

  @Get('me')
  getCurrentUser(
    @CurrentUser()
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      role: string;
    },
  ) {
    return user;
  }

  // ===== PASSWORD RESET ENDPOINTS =====

  @Public()
  @Post('password-reset/request')
  @HttpCode(HttpStatus.OK)
  async requestPasswordReset(@Body() dto: RequestPasswordResetDto) {
    return this.passwordResetService.requestPasswordReset(dto.email);
  }

  @Public()
  @Get('password-reset/verify')
  async verifyResetToken(@Query('token') token: string) {
    return this.passwordResetService.verifyResetToken(token);
  }

  @Public()
  @Post('password-reset/reset')
  @HttpCode(HttpStatus.OK)
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return this.passwordResetService.resetPassword(dto.token, dto.newPassword);
  }
}
