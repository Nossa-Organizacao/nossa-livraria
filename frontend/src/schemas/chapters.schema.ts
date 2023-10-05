import { z } from "zod";
import { bookSchema } from "./books.schema";
import { commentSchema } from "./comment.schema";

export const chapterSchema = z.object({
  id: z.string(),

  title: z.string().nonempty().min(1, {
    message: "Dê um título ao capítulo.",
  }),

  text: z.string().nonempty().min(1, {
    message: "Nos conte mais.",
  }),

  createdAt: z.string(),

  bookId: z.string(),

  userId: z.string(),
});

export const chapterWithBookSchema = chapterSchema.extend({
  book: bookSchema,
  comments: commentSchema.array(),
});

export const chapterRegisterSchema = chapterSchema.omit({
  id: true,
  createdAt: true,
  userId: true,
});
