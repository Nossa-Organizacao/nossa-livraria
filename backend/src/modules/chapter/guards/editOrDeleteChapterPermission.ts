import {
    Injectable,
    CanActivate,
    ExecutionContext,
    NotFoundException,
  } from '@nestjs/common';
  import { Request } from 'express';
  import { UnauthorizedException } from '@nestjs/common';
  import { PrismaService } from 'src/database/prisma.service';
  import { User } from 'src/modules/user/entities/user.entity';
  
  export class ownerChapterPermissionException extends UnauthorizedException {
    constructor() {
      super('Chapter does not belong to the user');
    }
  }
  
  @Injectable()
  export class ownerChapterPermissionGuard implements CanActivate {
    constructor(private prisma: PrismaService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest<Request>();
  
      const user: User = request.user as User;
  
      const userId = user.id;

      const chapterId = request.params.id
  
      const chapter = await this.prisma.chapter.findFirst({
        where: {
          id: chapterId,
        },
      });
  
      if (!chapter) {
        throw new NotFoundException('Chapter not found');
      }

      const bookId = chapter.bookId;

      const book = await this.prisma.book.findFirst({
        where: {
          id: bookId,
        },
      });

      const ownerBook = book.userId
  
      if (ownerBook != userId) {
        throw new ownerChapterPermissionException();
      }
  
      return true;
    }
  }
  