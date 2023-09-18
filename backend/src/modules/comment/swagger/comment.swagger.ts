import { OmitType } from '@nestjs/swagger';
import { Comment } from '../entities/comment.entity';

export class CommentSwagger extends Comment {}

// export class UserProfileSwagger extends ProfileSwagger {
//   @ApiProperty({ type: CarSwagger, isArray: true })
//   cars: CarSwagger[];
// }
