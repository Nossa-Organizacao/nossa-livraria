import { z } from "zod";
import {
  userInCommentSchema,
  userRegisterSchema,
  userResponseSchema,
  userSchema,
  userUpdateSchema,
} from "../schemas/users.schemas";

export type TUserResponse = z.infer<typeof userResponseSchema>;

export type TUserRegister = z.infer<typeof userRegisterSchema>;

export type TUser = z.infer<typeof userSchema>;

export type TUserUpdate = z.infer<typeof userUpdateSchema>;

export type TUserInComment = z.infer<typeof userInCommentSchema>
