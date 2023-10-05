import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateChapterDto {
  @ApiProperty({ default: 'O livro conta a história' })
  @IsString()
  title: string;

  @ApiProperty({ default: 'Era uma vez...' })
  @IsString()
  text: string;

  @ApiProperty()
  @IsString()
  bookId: string;

}
