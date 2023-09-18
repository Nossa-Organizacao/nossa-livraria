import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class Comment {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  text: string;
  
  @ApiProperty()
  @Exclude()
  createdAt: Date;
  
  @ApiProperty()
  spoiler: boolean;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  chapterId: string;

  constructor() {
    this.id = randomUUID();
  }
}
