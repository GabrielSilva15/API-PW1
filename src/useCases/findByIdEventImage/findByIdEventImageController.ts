import { FindByIdEventImageUseCase } from "./findByIdEventImageUseCase.js";
import {Request,Response} from "express";
import path from "path";

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log("dirname");
console.log(__dirname);


console.log("aqui");

console.log(__dirname);

export class FindByIdEventImageController{
    constructor(private findByIdEventImageUseCase:FindByIdEventImageUseCase){}

    async handle(request:Request,response:Response){
        try {
            const id = request.params.id;
            const event = await this.findByIdEventImageUseCase.execute(id);
    
            if(!event || !event.imagem){
                throw Error("O evento não existe ou não tem foto");
            }
            console.log("foto");
            console.log(event.foto);
            
            
            
            console.log("O diretório atual é:", __dirname, `${path.join(__dirname+"../"+"../"+"../"+"../","uploads/")}` + event.foto);

            console.log(`${path.join(__dirname+"../"+"../"+"../"+"../","uploads/")}` + event.imagem);
            
            response.sendFile(`${path.join(__dirname+"../"+"../"+"../"+"../")}uploads/` + event.imagem);
            return;
        } catch (error:any) {
            response.json({error:error.message});
        }
    }
}

