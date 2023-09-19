import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';
import { UpdateUserDto } from 'src/modules/user/dto/update-user.dto';

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

export class UserRelation extends PartialType(
  OmitType(UpdateUserDto, ['password'] as const),
) {}

export class CommentRelationUser extends Comment {
  user: UserRelation
}

