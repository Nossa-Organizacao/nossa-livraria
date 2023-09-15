import { z } from "zod";
// import { advertSchema } from "./adverts.schemas";

export const schemaUser = z.object({
  id: z.number(),

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
    .min(8, {
      message: " Data de Nascimento invalida.",
    })
    .refine((value) => /^[0-9]+$/.test(value), {
      message: "Deve conter apenas caracteres numéricos",
    }),

  aboutMe: z.string().min(1, {
    message: "A Descrição é obrigatória.",
  }),

  color: z.string().nullish(),

  inicial: z.string().nullish(),

  avatar: z.string().nullish(),

  resetToken: z.string().nullish(),
});

export const schemaUserRegister = schemaUser
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

export const schemaUserRequest = schemaUser.omit({
  id: true,
  createdAt: true,
});

// export const usersSchemaResponse = userSchema.extend({
//   adverts: z.optional(advertSchema).array(),
// });

// export const userSchemaResponse = userSchema.extend({
//   adverts: z.optional(advertSchema).array(),
// });

export const schemaUserUpdate = schemaUser
  .omit({
    id: true,
    color: true,
  })
  .extend({
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
  })
  .partial();

// export const usersSchema = userSchemaResponse.array();

export type TUser = z.infer<typeof schemaUser>;

export type TUserRegiste = z.infer<typeof schemaUserRegister>;
