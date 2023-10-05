import { z } from "zod";
import { userSchema } from "./users.schemas";
import { chapterSchema } from "./chapters.schema";

export const bookSchema = z.object({
  id: z.string(),

  title: z.string().nonempty().min(1, {
    message: "O título é obrigatório.",
  }),

  synopsis: z.string().optional(),

  cover: z.string().url("Deve ser uma fonte url da imagem *").optional(),

  status: z.boolean().default(false),

  score: z.string().min(1, {
    message: "A pontuação é obrigatória.",
  }),

  maiority: z.boolean().default(false),

  createdAt: z.string(),

  gender: z.string().array().optional(),

  userId: z.string(),
});

export const bookRegisterSchema = bookSchema.omit({
  id: true,
  createdAt: true,
  userId: true,
});

export const allInformationBookSchema = bookSchema.extend({
  chapters: chapterSchema.array(),
  user: userSchema,
  fans: userSchema.array()
});

export const bookUpdateSchema = bookRegisterSchema.partial();

export const bookUpdateResponseSchema = allInformationBookSchema.omit({
  user: true
})
