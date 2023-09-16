import { Injectable, NotFoundException } from '@nestjs/common';
import { BooksRepository } from './repositories/books.repository';
import { CreateBookDto } from './dtos/create-book.dto';
import { Book } from './entities/book.entity';
import { UpdateBookDto } from './dtos/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private booksRepository: BooksRepository) {}

  async create(data: CreateBookDto, userId: string) {
    return await this.booksRepository.create(data, userId);
  }

  async findAll() {
    return await this.booksRepository.findAll();
  }

  async findOne(id: string) {
    const book: Book | null = await this.booksRepository.findOne(id);

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  async update(id: string, updateCarDto: UpdateBookDto) {
    const findBook: Book | null = await this.booksRepository.findOne(id);

    if (!findBook) {
      throw new NotFoundException('Book not found');
    }

    return this.booksRepository.update(id, updateCarDto);
  }

  async remove(id: string) {
    const findBook: Book | null = await this.booksRepository.findOne(id);

    if (!findBook) {
      throw new NotFoundException('Book not found');
    }

    return this.booksRepository.delete(id);
  }
}
