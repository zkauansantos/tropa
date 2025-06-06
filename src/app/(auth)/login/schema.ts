import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string({
    message: 'E-mail é obrigatório',
  }).min(1, "E-mail é obrigatório").email('E-mail inválido'),
  password: z.string({
    message: 'Senha é obrigatória',
  }).min(1, "Senha é obrigatória")
});

export type LoginSchema = z.infer<typeof loginSchema>;