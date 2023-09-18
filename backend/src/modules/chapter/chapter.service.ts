import { Injectable, NotFoundException } from '@nestjs/common';
import { ChapterRepository } from './repositories/chapter.repository';
import { CreateChapterDto } from './dtos/create-chapter.dto';
import { Chapter } from './entities/chapter.entity';
import { UpdateChapterDto } from './dtos/update-chapter.dto';

@Injectable()
export class ChapterService {
  constructor(private chapterRepository: ChapterRepository) {}

  async create(data: CreateChapterDto, bookId: string) {
    return await this.chapterRepository.create(data, bookId);
  }

  async findAll() {
    return await this.chapterRepository.findAll();
  }

  async findOne(id: string) {
    const chapter: Chapter | null = await this.chapterRepository.findOne(id);

    if (!chapter) {
      throw new NotFoundException('Chapter not found');
    }

    return chapter;
  }

  async update(id: string, updateChapterDto: UpdateChapterDto) {
    const findChapter: Chapter | null = await this.chapterRepository.findOne(
      id,
    );

    if (!findChapter) {
      throw new NotFoundException('Chapter not found');
    }

    return this.chapterRepository.update(id, updateChapterDto);
  }

  async remove(id: string) {
    const findChapter: Chapter | null = await this.chapterRepository.findOne(
      id,
    );

    if (!findChapter) {
      throw new NotFoundException('Chapter not found');
    }

    return this.chapterRepository.delete(id);
  }
}
