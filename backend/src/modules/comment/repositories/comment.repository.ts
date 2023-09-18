import { CreateCommentDto } from "../dtos/create-comment.dto";
import { UpdateCommentDto } from "../dtos/update-comment.dto";
import { Comment } from "../entities/comment.entity";

export abstract class CommentRepository {
  abstract create(data: CreateCommentDto, userId: string): Promise<Comment>;
  abstract findAll(): Promise<Comment[]>;
  abstract findOne(id: string): Promise<Comment>;
  abstract update(id: string, data: UpdateCommentDto): Promise<Comment>;
  abstract delete(id: string): Promise<void>;
}
