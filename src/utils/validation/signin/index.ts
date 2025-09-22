import z from "zod";

export const login = z.object({
    email: z.string().email({ message: "O campo deve ser um email " }),
    password: z.string().min(1,{message:"Por favor insira a senha"})
  
})
export type LoginData = z.infer<typeof login>;