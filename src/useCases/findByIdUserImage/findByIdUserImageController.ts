import { FindByIdUserImageUseCase } from "./findByIdUserImageUseCase";
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

export class FindByIdUserImageController{
    constructor(private findByIdUserImageUseCase:FindByIdUserImageUseCase){}

    async handle(request:Request,response:Response){
        try {
            const id = request.params.id;
            const user = await this.findByIdUserImageUseCase.execute(id);
    
            if(!user || !user.foto){
                throw Error("O usuario não existe ou não tem foto");
            }
            console.log("foto");
            console.log(user.foto);
            
            
            
            console.log("O diretório atual é:", __dirname, `${path.join(__dirname+"../"+"../"+"../"+"../","uploads/")}` + user.foto);

            console.log(`${path.join(__dirname+"../"+"../"+"../"+"../","uploads/")}` + user.foto);
            
            response.sendFile(`${path.join(__dirname+"../"+"../"+"../"+"../")}uploads/` + user.foto);
            return;
        } catch (error:any) {
            response.json({error:error.message});
        }
    }
}

