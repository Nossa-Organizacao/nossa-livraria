import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { PrismaService } from 'src/database/prisma.service';
import { BooksRepository } from './repositories/books.repository';
import { BooksPrismaRepository } from './repositories/prisma/books.prisma';


@Module({
  controllers: [BooksController],
  providers: [
    BooksService,
    PrismaService,
    {
      provide: BooksRepository,
      useClass: BooksPrismaRepository,
    },
  ],
})
export class BooksModule {}
