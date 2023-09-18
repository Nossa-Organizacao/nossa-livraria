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
  
  export class ownerCommentPermissionException extends UnauthorizedException {
    constructor() {
      super('Comment does not belong to the user');
    }
  }
  
  @Injectable()
  export class ownerCommentPermissionGuard implements CanActivate {
    constructor(private prisma: PrismaService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest<Request>();
  
      const user: User = request.user as User;
  
      const userId = user.id;
      
      const commentId = request.params.id
  
      const comment = await this.prisma.comment.findFirst({
        where: {
          id: commentId,
        },
      });
  
      if (!comment) {
        throw new NotFoundException('Comment not found');
      }

      const commentUserId = comment.userId;
  
      if (commentUserId !== userId) {
        throw new ownerCommentPermissionException();
      }
  
      return true;
    }
  }
  