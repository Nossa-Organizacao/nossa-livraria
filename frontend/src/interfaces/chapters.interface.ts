import { z } from "zod";
import {
  chapterRegisterSchema,
  chapterSchema,
  chapterWithBookSchema,
} from "../schemas/chapters.schema";

export type TChapter = z.infer<typeof chapterSchema>;

export type TChapterWithBook = z.infer<typeof chapterWithBookSchema>;

export type TChapterRegister = z.infer<typeof chapterRegisterSchema>;
