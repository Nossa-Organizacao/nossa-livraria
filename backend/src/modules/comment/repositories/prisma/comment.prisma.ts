import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCommentDto } from '../../dtos/create-comment.dto';
import { Comment, CommentRelationUser } from '../../entities/comment.entity';
import { CommentRepository } from '../comment.repository';
import { Chapter } from 'src/modules/chapter/entities/chapter.entity';

@Injectable()
export class CommentPrismaRepository implements CommentRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    data: CreateCommentDto,
    userId: string,
  ): Promise<Comment> {
    const comment: Comment = new Comment();

    const chapter: Chapter = await this.prisma.chapter.findFirst({
      where: { id: data.chapterId },
    });

    if (!chapter) {
      throw new NotFoundException('Chapter not found');
    }

    Object.assign(comment, {
      ...data,
      userId: userId,
    });

    const newComment: Comment = await this.prisma.comment.create({
      data: {
        ...comment,
      },
    });

    return newComment;
  }

  async findAll(): Promise<CommentRelationUser[] | []> {
    const comments: CommentRelationUser[] | [] = await this.prisma.comment.findMany({
      include: {
        user: {
          select: {
            name: true,
            initials: true,
            color: true,
            avatar: true,
          }
        }
      }
    });

    return comments;
  }

  async findOne(id: string): Promise<Comment> {
    const comment: Comment = await this.prisma.comment.findFirst({
      where: { id },
    });
    return comment;
  }

  async update(id: string, data: CreateCommentDto): Promise<Comment> {
    const comment: Comment = await this.prisma.comment.update({
      where: { id },
      data: { ...data },
    });
    return comment;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.comment.delete({
      where: { id },
    });
  }
}
