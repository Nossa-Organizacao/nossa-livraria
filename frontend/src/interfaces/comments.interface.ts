import { z } from "zod";
import { commentSchema, commentWithUserSchema } from "../schemas/comment.schema";

export type TComment = z.infer<typeof commentSchema>

export type TCommentWithUser = z.infer<typeof commentWithUserSchema>;