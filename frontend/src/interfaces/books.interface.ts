import { z } from "zod";
import {
  allInformationBookSchema,
  bookRegisterSchema,
  bookSchema,
  bookUpdateResponseSchema,
  bookUpdateSchema,
} from "../schemas/books.schema";


export type TBook = z.infer<typeof bookSchema>;
export type TBookRegister = z.infer<typeof bookRegisterSchema>;

export type TAllInformationBook = z.infer<typeof allInformationBookSchema>;

export type TBookUpdate = z.infer<typeof bookUpdateSchema>;

export type TBookUpdateResponse = z.infer<typeof bookUpdateResponseSchema>;
