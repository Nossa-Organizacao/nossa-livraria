import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BookModule } from './modules/book/book.module';
import { ChapterModule } from './modules/chapter/chapter.module';

@Module({
  imports: [UserModule, AuthModule, BookModule, ChapterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
