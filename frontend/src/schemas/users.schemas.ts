import { z } from "zod";
import { allInformationBookSchema } from "./books.schema";

export const userSchema = z.object({
  id: z.string(),

  name: z.string().min(1, {
    message: "O nome é obrigatório.",
  }),

  email: z
    .string()
    .min(1, {
      message: "O Email é obrigatório.",
    })
    .email("Email Invalido"),

  birthDate: z
    .string()
    .nonempty("Data de nascimento é obrigatório")
    .min(10, "dd/mm/aaaa"),

  aboutMe: z.string().min(1, {
    message: "A Descrição é obrigatória.",
  }),

  color: z.string().nullish(),

  initials: z.string().nullish(),

  avatar: z.string().nullish(),

  resetToken: z.string().nullish(),
});

export const userResponseSchema = userSchema.extend({
  books: allInformationBookSchema.array(),
});

export const userRegisterSchema = userSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
    confirm_password: z.string().min(1, {
      message: "Confirmação de senha é obrigatória.",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "As senhas devem ser iguais",
    path: ["confirm_password"],
  });

export const userRequestSchema = userSchema.omit({
  id: true,
  createdAt: true,
});

// export const usersSchemaResponse = userSchema.extend({
//   adverts: z.optional(advertSchema).array(),
// });

// export const userSchemaResponse = userSchema.extend({
//   adverts: z.optional(advertSchema).array(),
// });

export const userUpdateSchema = userSchema
  .omit({
    id: true,
    color: true,
  })
  .extend({
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
  })
  .partial();

// export const usersSchema = userSchemaResponse.array();
export const userInCommentSchema = userRequestSchema.omit({
  email: true,
  birthDate: true,
  aboutMe: true,
  resetToken: true,
});
