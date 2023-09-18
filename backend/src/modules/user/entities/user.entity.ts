import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  @Exclude()
  password: string;

  @ApiProperty()
  initials: string;

  @ApiProperty()
  birthDate: string;

  @ApiPropertyOptional()
  aboutMe: string | null;

  @ApiProperty()
  color: string;

  @ApiProperty()
  @Exclude()
  createdAt: Date;

  @ApiPropertyOptional()
  avatar: string | null;

  @ApiPropertyOptional()
  @Exclude()
  resetToken: string | null;

  constructor() {
    this.id = randomUUID();
  }
}
