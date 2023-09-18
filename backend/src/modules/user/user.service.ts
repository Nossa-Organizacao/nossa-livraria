import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';
import { MailService } from './utils/mail.service';
import { randomUUID } from 'crypto';
import {
  InformEmailDto,
  InformNewPasswordDto,
  TokenDto,
} from './dto/send-email.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private mailService: MailService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const findUser: User | null = await this.userRepository.findByEmail(
      createUserDto.email,
    );

    if (findUser) {
      throw new ConflictException('Email already exists');
    }

    const user: User = await this.userRepository.create(createUserDto);

    return user;
  }

  async findAll() {
    return this.userRepository.findAll();
  }

  async findOne(id: string) {
    const findUser: User | null = await this.userRepository.findOne(id);

    if (!findUser) {
      throw new NotFoundException('User not found');
    }

    return findUser;
  }

  async findByEmail(email: string) {
    const findUser: User = await this.userRepository.findByEmail(email);

    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser: User | null = await this.userRepository.findOne(id);

    if (!findUser) {
      throw new NotFoundException('User not found!');
    }

    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    const findUser = await this.userRepository.findOne(id);

    if (!findUser) {
      throw new NotFoundException('User not found!');
    }

    return this.userRepository.delete(id);
  }

  async sendEmailResetPassword(informEmailDto: InformEmailDto) {
    const user: User | null = await this.userRepository.findByEmail(
      informEmailDto.email,
    );

    if (!user) {
      throw new NotFoundException('User Not found');
    }

    const resetToken: string = randomUUID();

    await this.userRepository.updateToken(informEmailDto.email, resetToken);

    const resetPasswordTemplate = await this.mailService.resetPasswordTemplate(
      informEmailDto.email,
      user.name,
      resetToken,
    );

    await this.mailService.sendEmail(resetPasswordTemplate);
  }

  async resetPassword(
    informNewPasswordDto: InformNewPasswordDto,
    tokenDto: TokenDto,
  ) {
    const user: User | null = await this.userRepository.findByToken(
      tokenDto.token,
    );

    if (!user) {
      throw new NotFoundException('User Not found');
    }

    await this.userRepository.updatePassword(
      user.id,
      informNewPasswordDto.password,
    );
  }
}
