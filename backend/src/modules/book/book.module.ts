import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { PrismaService } from 'src/database/prisma.service';
import { BookRepository } from './repositories/book.repository';
import { BookPrismaRepository } from './repositories/prisma/book.prisma';

@Module({
  controllers: [BookController],
  providers: [
    BookService,
    PrismaService,
    {
      provide: BookRepository,
      useClass: BookPrismaRepository,
    },
  ],
})
export class BookModule {}
