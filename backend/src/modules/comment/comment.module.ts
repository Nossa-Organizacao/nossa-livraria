import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { CommentRepository } from './repositories/comment.repository';
import { CommentPrismaRepository } from './repositories/prisma/comment.prisma';

@Module({
  controllers: [CommentController],
  providers: [
    CommentService,
    PrismaService,
    {
      provide: CommentRepository,
      useClass: CommentPrismaRepository,
    },
  ],
})
export class CommentModule {}
