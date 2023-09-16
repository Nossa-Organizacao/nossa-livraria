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
import { BooksService } from './books.service';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateBookDto } from './dtos/create-book.dto';
import { UnauthorizedSwagger } from 'src/helpers/swagger/unauthorized.swagger';
import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';
import { UpdateBookDto } from './dtos/update-book.dto';
import { ownerBookPermissionGuard } from './guards/updateOrDeletePermission.guard';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar um livro.' })
  @ApiResponse({
    status: 201,
    description: 'O livro foi cadastrado com sucesso!',
    // type: CarSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: BadRequestSwagger,
  })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() data: CreateBookDto, @Request() req) {
    return this.booksService.create(data, req.user.id);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os livros cadastrados.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de todos os carros!',
    // type: CarsPaginationSwagger,
  })
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listar as informações de um livro.',
  })
  @ApiResponse({
    status: 200,
    description: 'Dados do livro retornado com sucesso!',
    // type: CarRelationsSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Livro não encontrado!',
    type: NotFoundSwagger,
  })
  @UseGuards(JwtAuthGuard, ownerBookPermissionGuard)
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar as informações de um livro.',
  })
  @ApiResponse({
    status: 200,
    description: 'Livro atualizado com sucesso!',
    // type: CarRelationsSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Livro não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão para editar os dados do livro.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtAuthGuard, ownerBookPermissionGuard)
  update(@Param('id') id: string, @Body() data: UpdateBookDto) {
    return this.booksService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar as informações de um livro.',
  })
  @ApiResponse({
    status: 204,
    description: 'Livro deletado com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'Livro não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão para deletar o livro.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtAuthGuard, ownerBookPermissionGuard)
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
