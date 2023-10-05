import { z } from "zod";
import { userInCommentSchema } from "./users.schemas";

export const commentSchema = z.object({
  id: z.string(),

  text: z.string().nonempty().min(1, {
    message: "Nos conte mais.",
  }),

  createdAt: z.string(),

  spoiler: z.boolean().default(false),

  userId: z.string(),

  chapterId: z.string(),
});

export const commentWithUserSchema = commentSchema.extend({
  user: userInCommentSchema,
});
