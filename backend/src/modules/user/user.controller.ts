import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpCode,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  InformEmailDto,
  InformNewPasswordDto,
  TokenDto,
} from './dto/send-email.dto';

import { ConflictSwagger } from 'src/helpers/swagger/conflict.swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';
import { UnauthorizedSwagger } from 'src/helpers/swagger/unauthorized.swagger';
import { UserAdmPermissionGuard } from './guards/userAdm-permission.guard';
import { UserPermissionGuard } from './guards/user-permission.guard';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  @ApiOperation({ summary: 'Cadastrar novos usuários.' })
  @ApiResponse({
    status: 201,
    description: 'O usuário cadastrado com sucesso!',
  })
  @ApiResponse({
    status: 409,
    description: 'O usuário já está cadastrado!',
    type: ConflictSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: BadRequestSwagger,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários.' })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários',
    isArray: true,
  })
  findAll() {
    return this.userService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  @ApiOperation({ summary: 'Listar dados de um usuário.' })
  @ApiResponse({
    status: 200,
    description: 'Dados do usuário retornados com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão de acessar os dados do usuário.',
    type: UnauthorizedSwagger,
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.findOne(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Patch(':id')
  @ApiOperation({ summary: 'Editar dados de um usuário.' })
  @ApiResponse({
    status: 200,
    description: 'Dados do usuário alterados com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão de acessar os dados do usuário.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtAuthGuard, UserPermissionGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(':id')
  @ApiOperation({ summary: 'Deletar dados de um usuário.' })
  @ApiResponse({
    status: 204,
    description: 'Usuário deletado com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão para deletar o usuário.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtAuthGuard, UserPermissionGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @HttpCode(200)
  @Post('resetPassword')
  @ApiOperation({ summary: 'Enviar e-mail de recuperação de senha.' })
  @ApiResponse({
    status: 200,
    description: 'E-mail enviado com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado!',
    type: NotFoundSwagger,
  })
  async sendEmailResetPassword(@Body() informEmailDto: InformEmailDto) {
    await this.userService.sendEmailResetPassword(informEmailDto);
    return { message: 'token send' };
  }
  @Patch('resetPassword/:token')
  @ApiOperation({ summary: 'Editar a senha de um usuário.' })
  @ApiResponse({
    status: 200,
    description: 'Senha alterada com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado!',
    type: NotFoundSwagger,
  })
  async resetPassword(
    @Param() tokenDto: TokenDto,
    @Body() informNewPasswordDto: InformNewPasswordDto,
  ) {
    await this.userService.resetPassword(informNewPasswordDto, tokenDto);

    return { message: 'Password change with sucess!' };
  }
}
