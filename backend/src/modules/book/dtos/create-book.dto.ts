import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsString } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ default: 'O livro de todos' })
  @IsString()
  title: string;

  @ApiPropertyOptional({ default: 'O livro conta a história' })
  @IsString()
  synopsis: string | null;

  @ApiPropertyOptional({
    default:
      'https://odgraph.com.br/wp-content/uploads/2020/03/maquete-de-uma-capa-de-livro_117023-1303.jpg',
  })
  @IsString()
  cover: string | null;

  @ApiPropertyOptional({ default: false })
  @IsBoolean()
  status: boolean | null;

  @ApiProperty({ default: '100' })
  @IsString()
  score: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  maiority: boolean;
}
