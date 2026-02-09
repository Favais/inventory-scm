import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email address of the user',
  })
  email: string;

  @IsString()
  @MinLength(8)
  @ApiProperty({
    example: 'StrongP@ssw0rd',
    description: 'The password of the user',
    minLength: 8,
  })
  password: string;
}
