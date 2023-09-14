import { Injectable } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UsersService } from '../user/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validatedUser(userEmail: string, userPassword: string) {
    const user: User | null = await this.userService.findByEmail(userEmail);

    if (user) {
      const passwordMatch = await compare(userPassword, user.password);

      if (passwordMatch) {
        return { email: user.email };
      }
    }

    return null;
  }

  async login(email: string) {
    const user: User = await this.userService.findByEmail(email);

    return {
      token: this.jwtService.sign(
        { email, resetToken: user.resetToken },
        { subject: user.id }
      ),//Salva os dados na request.user
      // id: user.id, //Aparece na resposta da requisição
      // email: email
    };
  }
}
