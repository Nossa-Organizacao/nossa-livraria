import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateChapterDto } from '../../dtos/create-chapter.dto';
import { Chapter } from '../../entities/chapter.entity';
import { ChapterRepository } from '../chapter.repository';

@Injectable()
export class ChapterPrismaRepository implements ChapterRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateChapterDto, bookId: string): Promise<Chapter> {

    const chapter: Chapter = new Chapter();

    Object.assign(chapter, {
      ...data,
      bookId: bookId,
    });

    const newChapter: Chapter = await this.prisma.chapter.create({
      data: {
        id: chapter.id,

        title: chapter.title,
        text: chapter.text,
        createdAt: chapter.createdAt,

        bookId: chapter.bookId,
      },
    });

    return newChapter;
  }

  async findAll(): Promise<Chapter[] | []> {
    const chapters: Chapter[] | [] = await this.prisma.chapter.findMany({
      include: {
        book: true,
        comments: true,
      },
    });
    return chapters;
  }

  async findOne(id: string): Promise<Chapter> {
    const chapter: Chapter = await this.prisma.chapter.findFirst({
      where: { id },
      include: {
        comments: true
      },
    });
    return chapter;
  }

  async update(id: string, data: CreateChapterDto): Promise<Chapter> {
    const chapter: Chapter = await this.prisma.chapter.update({
      where: { id },
      include: {
        comments: true
      },
      data: { ...data },
    });
    return chapter;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.chapter.delete({
      where: { id },
    });
  }
}
