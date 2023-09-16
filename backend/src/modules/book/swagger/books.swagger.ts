import { OmitType } from '@nestjs/swagger';
import { Book } from '../entities/book.entity';

export class BookSwagger extends Book {}


// export class UserProfileSwagger extends ProfileSwagger {
//   @ApiProperty({ type: CarSwagger, isArray: true })
//   cars: CarSwagger[];
// }