import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class Book {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  title: string;

  @ApiPropertyOptional()
  synopsis: string;

  @ApiPropertyOptional()
  cover: string | null;

  @ApiProperty()
  status: boolean

  @ApiProperty()
  score: string;

  @ApiProperty()
  maiority: boolean;

  @ApiProperty()
  @Exclude()
  createdAt: Date;

  @ApiProperty()
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
