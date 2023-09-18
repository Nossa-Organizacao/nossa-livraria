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
import { CommentService } from './comment.service';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UnauthorizedSwagger } from 'src/helpers/swagger/unauthorized.swagger';
import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';
import { ownerCommentPermissionGuard } from './guards/editOrDeleteCommentPermission';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { UpdateCommentDto } from './dtos/update-comment.dto';

@ApiTags('Comment')
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar um comentário.' })
  @ApiResponse({
    status: 201,
    description: 'O comentário foi cadastrado com sucesso!',
    // type: CarSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: BadRequestSwagger,
  })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() data: CreateCommentDto, @Request() req) {
    return this.commentService.create(data, req.user.id);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os comentários cadastrados.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de todos os comentários.',
    // type: CarsPaginationSwagger,
  })
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listar os dados de um comentário.',
  })
  @ApiResponse({
    status: 200,
    description: 'Dados do Comentário retornado com sucesso!',
    // type: CarRelationsSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Comentário não encontrado!',
    type: NotFoundSwagger,
  })
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar as informações de um comentário.',
  })
  @ApiResponse({
    status: 200,
    description: 'Comentário atualizado com sucesso!',
    // type: CarRelationsSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Comentário não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão para editar os dados do comentário.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtAuthGuard, ownerCommentPermissionGuard)
  update(@Param('id') id: string, @Body() data: UpdateCommentDto) {
    return this.commentService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar as informações de um comentário.',
  })
  @ApiResponse({
    status: 204,
    description: 'Comentário deletado com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'Comentário não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão para deletar o comentário.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtAuthGuard, ownerCommentPermissionGuard)
  remove(@Param('id') id: string) {
    return this.commentService.remove(id);
  }
}
