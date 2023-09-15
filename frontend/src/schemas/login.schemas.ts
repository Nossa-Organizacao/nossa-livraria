import { z } from "zod";

export const schemaLoginRequest = z.object({
  email: z
    .string()
    .min(1, {
      message: "O Email é obrigatório.",
    })
    .email("Email Invalido"),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
});

export const schemaLoginResponse = z.object({
  token: z.string(),
});

export type TLoginRequest = z.infer<typeof schemaLoginRequest>;

export type TLoginResponse = z.infer<typeof schemaLoginResponse>;
