import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/user/users.module';
import { BooksModule } from './modules/book/books.module';

@Module({
  imports: [UsersModule, AuthModule, BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
