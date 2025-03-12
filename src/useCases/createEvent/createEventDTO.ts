import {z} from "zod";

export const createEventDTO = z.object({
    title:z.string({
            required_error:"Title is required",
            invalid_type_error:"Title must be a string"
        }
    ).min(5,"O titulo tem que ter no mínimo 5 caracteres").max(255,"O titulo deve ter no maximo 255 caracteres").refine(data => !!data, { message: 'The title is mandatory' }),

    description:z.string({invalid_type_error:"Description must be a string"}).max(500,"A descrição suporta no máximo 500 caracteres").optional(),

    quantPart:z.number({
        required_error:"Quantidade de participantes is required",
        invalid_type_error:"Quantidade de participantes must be a number"
    }).int("A quantidade de participantes deve ser um número inteiro").refine(data => !!data, { message: 'The quantidade de participantes is mandatory' }),

    data:z.string({
        required_error:"Data is required",
        invalid_type_error:"Data must be a string"
    }).refine(data => !!data, { message: 'The data is mandatory' }),

    imagem:z.string({
        invalid_type_error:"Imagem must be a string"
    }).optional(),

    horario:z.string({
        invalid_type_error:"Horario must be a string"
    }).optional(),

    geolocalization:z.object({type: z.string(), coordinates: z.array(z.number()).
        min(2,"A localizacao deve ter pelo menos duas posicoes!").
        max(2,"A localizacao deve tem pelo menos duas posicoes!")}),

    endereco:z.string({
         required_error:"Endereco is required",
        invalid_type_error:"Endereco must be a string"
    }).max(255).refine(data => !!data, { message: 'The endereco is mandatory' })
})



