import { z } from "zod";
import {
  loginRequestSchema,
  loginResponseSchema,
} from "../schemas/login.schemas";

export type TLoginRequest = z.infer<typeof loginRequestSchema>;

export type TLoginResponse = z.infer<typeof loginResponseSchema>;
