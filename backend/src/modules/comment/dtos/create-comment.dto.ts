import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsString, IsOptional } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ default: 'O livro conta...' })
  @IsString()
  text: string;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  spoiler: boolean = false

  @ApiProperty()
  @IsString()
  chapterId: string;

}
