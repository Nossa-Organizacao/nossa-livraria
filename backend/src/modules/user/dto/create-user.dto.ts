import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsString,
  IsEmail,
  MinLength,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { hashSync } from 'bcryptjs';

export class CreateUserDto {
  @ApiProperty({ default: 'Fulano de Tal' })
  @IsString()
  name: string;

  @ApiProperty({ default: 'fulanodetal@mail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ default: '12345678' })
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @ApiProperty({ default: 'FT' })
  @IsString()
  initials: string;

  @ApiProperty({ default: '1985/10/30' })
  @IsString()
  birthDate: string;

  @ApiPropertyOptional({ default: 'Eu sempre fui...' })
  @IsOptional()
  @IsString()
  aboutMe: string | null;

  @ApiProperty({ default: 'blue' })
  @IsString()
  color: string;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiPropertyOptional({ default: '' })
  @IsOptional()
  @IsString()
  avatar: string | null;

  @ApiPropertyOptional({ default: null })
  @IsString()
  @IsOptional()
  resetToken: string | null = null
}
