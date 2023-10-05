import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ChapterService } from './chapter.service';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UnauthorizedSwagger } from 'src/helpers/swagger/unauthorized.swagger';
import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';
import { createChapterPermissionGuard } from './guards/createPermissionChapter';
import { CreateChapterDto } from './dtos/create-chapter.dto';
import { UpdateChapterDto } from './dtos/update-chapter.dto';
import { ownerChapterPermissionGuard } from './guards/editOrDeleteChapterPermission';

@ApiTags('Chapter')
@Controller('chapters')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar um capítulo.' })
  @ApiResponse({
    status: 201,
    description: 'O capítulo foi cadastrado com sucesso!',
    // type: CarSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: BadRequestSwagger,
  })
  @UseGuards(JwtAuthGuard, createChapterPermissionGuard)
  @ApiBearerAuth()
  create(@Body() data: CreateChapterDto, @Request() req) {
    return this.chapterService.create(data, req.body.bookId, req.user.id);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os capítulos cadastrados.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de todos os capítulos.',
    // type: CarsPaginationSwagger,
  })
  findAll() {
    return this.chapterService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listar as informações de um capítulo.',
  })
  @ApiResponse({
    status: 200,
    description: 'Dados do capítulo retornado com sucesso!',
    // type: CarRelationsSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Capítulo não encontrado!',
    type: NotFoundSwagger,
  })
  findOne(@Param('id') id: string) {
    return this.chapterService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar as informações de um capítulo.',
  })
  @ApiResponse({
    status: 200,
    description: 'Capítulo atualizado com sucesso!',
    // type: CarRelationsSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Capítulo não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão para editar os dados do capítulo.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtAuthGuard, ownerChapterPermissionGuard)
  update(@Param('id') id: string, @Body() data: UpdateChapterDto) {
    return this.chapterService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar as informações de um capítulo.',
  })
  @ApiResponse({
    status: 204,
    description: 'Capítulo deletado com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'Capítulo não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão para deletar o capítulo.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtAuthGuard, ownerChapterPermissionGuard)
  remove(@Param('id') id: string) {
    return this.chapterService.remove(id);
  }
}
