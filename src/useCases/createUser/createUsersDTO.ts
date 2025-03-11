import { z } from "zod";
import { verificationCPF } from "../../utils/verificationCPF"; 

//Função para validar o telefone - ter que arrumar
const validatePhone = (phone:string) => {
    const phoneValidate = /^(\+\d{1,2}\s?)?(\()?\d{2,4}(\))?\s?(\d{4,5}(-|\s)?\d{4})$/;
    const isValid = phoneValidate.test(phone);
    return isValid;
}

//Função para validar o cpf - ter que arrumar
const validateCPF=(cpf:string)=>{
    const cpfRegex = /[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[\-][0-9]{2}/;
    const isValid = cpfRegex.test(cpf);

    if(isValid){
        return verificationCPF(cpf);
    }

    return false;
    
}

export const CreateUserDTO = z.object({

    name:z.string({
        required_error:"Name is required",
        invalid_type_error:"Name must be a string",
    }).min(5,"O nome deve ter no mínimo 5 caracteres").max(255,"O nome suporta no máximo 255 caracteres").refine(data => !!data, { message: 'The name is mandatory' }),

     email:z.string({
        required_error:"E-mail is required",
        invalid_type_error:"E-mail must be a string",
     }).email('Por favor informe um e-mail válido!').refine(data => !!data, { message: 'The email is mandatory' }),

     password:z.string({
        required_error:"Password is required",
        invalid_type_error:"Password must be a string",
     }).min(4,"A senha deve ter no mínimo 4 caracteres").max(255,"A senha suporta no máximo 255 caracteres").refine(data => !!data, { message: 'The password is mandatory' }),

     cpf:z.string().min(11,"O CPF precisa ter no mínimo 11 caracteres!").max(14,"O CPF suporta no máximo 14 caracteres!").refine(data => validateCPF(data),{message:'Invalid cpf'}).optional(),

     foto:z.string().optional(),

     telefone:z.string()
     .refine(data => validatePhone(data), { message: 'Invalid telephone number' }).optional(),

     idade:z.number().int("A idade deve ser um número inteiro").positive("A idade deve ser um número inteiro positivo").optional(),

     organizador:z.boolean().optional()
})