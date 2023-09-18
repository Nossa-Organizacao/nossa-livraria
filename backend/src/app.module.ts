import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BookModule } from './modules/book/book.module';
import { ChapterModule } from './modules/chapter/chapter.module';
import { CommentModule } from './modules/comment/comment.module';

@Module({
  imports: [
    UserModule, 
    AuthModule, 
    BookModule, 
    ChapterModule, 
    CommentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
