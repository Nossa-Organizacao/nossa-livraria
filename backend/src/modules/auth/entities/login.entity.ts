import { ApiProperty } from '@nestjs/swagger';

export class Login {
  @ApiProperty()
  token: string;

  @ApiProperty()
  id: string;
}
