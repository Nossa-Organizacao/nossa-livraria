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

export class ownerBookPermissionException extends UnauthorizedException {
  constructor() {
    super('Only the author of the book can make changes.');
  }
}

@Injectable()
export class ownerBookPermissionGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const user: User = request.user as User;

    const userId = user.id;

    const bookId = request.params.id;

    const book = await this.prisma.book.findFirst({
      where: {
        id: bookId,
      },
    });

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    if (book.userId != userId) {
      throw new ownerBookPermissionException();
    }

    return true;
  }
}
