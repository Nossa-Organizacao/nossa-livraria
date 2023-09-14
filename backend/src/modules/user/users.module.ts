import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { UsersPrismaRepository } from './repositories/prisma/users.prisma';
// import { MailerModule } from '@nestjs-modules/mailer';
// import { MailService } from '../utils/mail.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    // MailService,
    {
      provide: UsersRepository,
      useClass: UsersPrismaRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
