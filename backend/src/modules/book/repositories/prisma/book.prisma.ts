import { Injectable } from '@nestjs/common';
import { BookRepository } from '../book.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateBookDto } from '../../dtos/create-book.dto';
import { Book } from '../../entities/book.entity';

@Injectable()
export class BookPrismaRepository implements BookRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBookDto, userId: string): Promise<Book> {
    const book: Book = new Book();

    Object.assign(book, {
      ...data,
      userId: userId,
    });

    const newBook: Book = await this.prisma.book.create({
      data: {
        id: book.id,

        title: book.title,
        synopsis: book.synopsis,
        cover: book.cover,
        status: book.status,
        score: book.score,
        maiority: book.maiority,
        createdAt: book.createdAt,

        userId: book.userId,
      },
    });
    return newBook;
  }

  async findAll(): Promise<Book[] | []> {
    const books: Book[] | [] = await this.prisma.book.findMany({
      include: {
        chapters: true,
        genders: true,
        comments: true,
        user: true
      },
    });
    return books;
  }

  async findOne(id: string): Promise<Book> {
    const book: Book = await this.prisma.book.findFirst({
      where: { id },
      include: {
        genders: true,
        chapters: true,
      },
    });
    return book;
  }

  async update(id: string, data: CreateBookDto): Promise<Book> {
    const book: Book = await this.prisma.book.update({
      where: { id },
      include: {
        genders: true,
        chapters: true,
      },
      data: { ...data },
    });
    return book;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.book.delete({
      where: { id },
    });
  }
}
