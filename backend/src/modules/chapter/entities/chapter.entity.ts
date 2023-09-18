import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class Chapter {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  text: string;

  @ApiProperty()
  @Exclude()
  createdAt: Date;

  @ApiProperty()
  bookId: string;

  constructor() {
    this.id = randomUUID();
  }
}
