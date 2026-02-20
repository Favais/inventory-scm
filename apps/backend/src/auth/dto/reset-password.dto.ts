import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @IsString()
  @MinLength(64)
  token: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
    message:
      'Password must contain uppercase, lowercase, number and special character',
  })
  newPassword: string;
}

export class VerifyResetTokenDto {
  @IsString()
  @MinLength(64)
  token: string;
}

export class RequestPasswordResetDto {
  @IsEmail({}, { message: 'Please provide a valid email address' })
  email: string;
}
