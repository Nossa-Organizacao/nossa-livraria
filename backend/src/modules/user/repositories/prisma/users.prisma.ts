import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { plainToInstance } from 'class-transformer';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { hashSync } from 'bcryptjs';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const user: User = new User();

    Object.assign(user, {
      ...data,
    });

    const newUser: User = await this.prisma.user.create({
      data: { ...user },
    });

    return plainToInstance(User, newUser);
  }

  async findAll(): Promise<User[]> {
    const users: User[] | [] = await this.prisma.user.findMany();

    return plainToInstance(User, users);
  }
  
  async findOne(id: string): Promise<User> {
    const user: User | null = await this.prisma.user.findUnique({
      where: { id }
    });

    return plainToInstance(User, user);
  }

  async findByEmail(email: string): Promise<User> {
    const user: User = await this.prisma.user.findUnique({
      where: { email },
    });

    return user;
  }

  async findByToken(token: string): Promise<User> {
    const user: User = await this.prisma.user.findFirst({
      where: { resetToken: token },
    });

    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const user: User = await this.prisma.user.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(User, user);
  }

  async updateToken(email: string, token: string): Promise<void> {
    await this.prisma.user.update({
      where: { email },
      data: { resetToken: token },
    });
  }

  async updatePassword(id: string, password: string): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: {
        password: hashSync(password, 10),
        resetToken: null,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
