import { OmitType } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

// export class UserSwagger extends OmitType(User, ['isAdm', 'password']) {}


// export class UserProfileSwagger extends ProfileSwagger {
//   @ApiProperty({ type: CarSwagger, isArray: true })
//   cars: CarSwagger[];
// }
