import z from "zod";

export const signup = z.object({
    name: z.string().min(5, { message: "O campo nome deve conter ao menos 5 letras " }),
    phone: z.string().min(11, { message: "O campo telefone deve conter ao menos 11 números " }),
    profession: z.string().min(1, { message: "O campo profissão deve ser preenchido " }),
    email: z.string().email({ message: "O campo deve ser um email " }),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, 'A senha precisa conter 8 caracteres: 1 maiúscula, 1 minúscula, 1 caractere especial').min(8, { message: "A senha precisa conter 8 caracteres: 1 maiúscula, 1 minúscula, 1 caractere especial " }),
    
})
export type SignupData = z.infer<typeof signup>;