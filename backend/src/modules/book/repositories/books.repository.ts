import { CreateBookDto } from "../dtos/create-book.dto";
import { UpdateBookDto } from "../dtos/update-book.dto";
import { Book } from "../entities/book.entity";

export abstract class BooksRepository {
    abstract create(data: CreateBookDto, userId: string): Promise<Book>;
    abstract findAll(): Promise<Book[]>;
    abstract findOne(id: string): Promise<Book>;
    abstract update(id: string, data: UpdateBookDto): Promise<Book>;
    abstract delete(id: string): Promise<void>;
}   