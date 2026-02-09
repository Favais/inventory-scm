import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email address of the user',
  })
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @MaxLength(32, { message: 'Password must not exceed 32 characters' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
    message:
      'Password must contain uppercase, lowercase, number and special character',
  })
  @ApiProperty({
    example: 'StrongP@ssw0rd',
    description:
      'Password (8–32 chars, must include uppercase, lowercase, number, and special character)',
    minLength: 8,
    maxLength: 32,
  })
  password: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  @ApiProperty({
    example: 'John',
    description: 'First name of the user',
    minLength: 2,
    maxLength: 100,
  })
  firstName: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  @ApiProperty({
    example: 'Doe',
    description: 'Last name of the user',
    minLength: 2,
    maxLength: 100,
  })
  lastName: string;
}
