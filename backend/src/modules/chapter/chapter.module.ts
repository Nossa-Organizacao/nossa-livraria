import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ChapterController } from './chapter.controller';
import { ChapterService } from './chapter.service';
import { ChapterRepository } from './repositories/chapter.repository';
import { ChapterPrismaRepository } from './repositories/prisma/chapter.prisma';

@Module({
  controllers: [ChapterController],
  providers: [
    ChapterService,
    PrismaService,
    {
      provide: ChapterRepository,
      useClass: ChapterPrismaRepository,
    },
  ],
})
export class ChapterModule {}
