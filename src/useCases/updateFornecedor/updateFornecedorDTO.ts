import {z}from "zod";

export const updateFornecedorDTO = z.object({
    name:z.string({
        required_error:"Title is required",
        invalid_type_error:"Title must be a string"
    }).min(5,"O titulo tem que ter no mínimo 5 caracteres").max(255,"O titulo deve ter no maximo 255 caracteres").optional(),
    
    foto:z.string({
        invalid_type_error:"Imagem must be a string"
    }).optional()
})