import { CreateChapterDto } from '../dtos/create-chapter.dto';
import { UpdateChapterDto } from '../dtos/update-chapter.dto';
import { Chapter } from '../entities/chapter.entity';

export abstract class ChapterRepository {
  abstract create(data: CreateChapterDto, bookId: string, userId: string): Promise<Chapter>;
  abstract findAll(): Promise<Chapter[]>;
  abstract findOne(id: string): Promise<Chapter>;
  abstract update(id: string, data: UpdateChapterDto): Promise<Chapter>;
  abstract delete(id: string): Promise<void>;
}
