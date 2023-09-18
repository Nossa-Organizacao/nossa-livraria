import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from './repositories/book.repository';
import { CreateBookDto } from './dtos/create-book.dto';
import { Book } from './entities/book.entity';
import { UpdateBookDto } from './dtos/update-book.dto';

@Injectable()
export class BookService {
  constructor(private bookRepository: BookRepository) {}

  async create(data: CreateBookDto, userId: string) {
    return await this.bookRepository.create(data, userId);
  }

  async findAll() {
    return await this.bookRepository.findAll();
  }

  async findOne(id: string) {
    const book: Book | null = await this.bookRepository.findOne(id);

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  async update(id: string, updateCarDto: UpdateBookDto) {
    const findBook: Book | null = await this.bookRepository.findOne(id);

    if (!findBook) {
      throw new NotFoundException('Book not found');
    }

    return this.bookRepository.update(id, updateCarDto);
  }

  async remove(id: string) {
    const findBook: Book | null = await this.bookRepository.findOne(id);

    if (!findBook) {
      throw new NotFoundException('Book not found');
    }

    return this.bookRepository.delete(id);
  }
}
