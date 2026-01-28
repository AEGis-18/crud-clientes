import { z } from "zod";

export const clienteSchema = z.object({
  nombre: z
    .string()
    .min(2, { error: "El nombre ingresado es demasiado corto" }),
  apellido: z
    .string()
    .min(2, { error: "El apellido ingresado es demasiado corto" }),
  segundo_apellido: z.string().optional().nullable(),
  email: z.email({ error: "Email no válido" }),
  estado: z.boolean().default(true),
});

export type ClienteInput = z.infer<typeof clienteSchema>;
