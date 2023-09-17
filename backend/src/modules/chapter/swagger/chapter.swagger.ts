import { OmitType } from '@nestjs/swagger';
import { Chapter } from '../entities/chapter.entity';

export class ChapterSwagger extends Chapter {}

// export class UserProfileSwagger extends ProfileSwagger {
//   @ApiProperty({ type: CarSwagger, isArray: true })
//   cars: CarSwagger[];
// }
