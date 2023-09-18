import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CommentRepository } from './repositories/comment.repository';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { UpdateCommentDto } from './dtos/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(private commentRepository: CommentRepository) {}

  async create(data: CreateCommentDto, userId: string) {
    return await this.commentRepository.create(data, userId);
  }

  async findAll() {
    return await this.commentRepository.findAll();
  }

  async findOne(id: string) {
    const comment: Comment | any = await this.commentRepository.findOne(id);

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    return comment;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const findComment: Comment | any = await this.commentRepository.findOne(id);

    if (!findComment) {
      throw new NotFoundException('Comment not found');
    }

    return this.commentRepository.update(id, updateCommentDto);
  }

  async remove(id: string) {
    const findComment: Comment | any = await this.commentRepository.findOne(id);

    if (!findComment) {
      throw new NotFoundException('Comment not found');
    }

    return this.commentRepository.delete(id);
  }
}
