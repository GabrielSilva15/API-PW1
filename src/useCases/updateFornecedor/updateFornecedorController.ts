import { UpdateFornecedorUseCase } from "./updateFornecedorUseCase";
import { updateFornecedorDTO } from "./updateFornecedorDTO";
import { Request,Response } from "express";
import {z} from "zod";


export class UpdateFornecedorController {
    constructor(private updateFornecedorUseCase:UpdateFornecedorUseCase){}

    async handle(request:Request,response:Response){
        try {
            const {id} = request.params;

            updateFornecedorDTO.parse(request.body);

            const data:z.infer<typeof updateFornecedorDTO>= request.body;

            let upFornecedor = await this.updateFornecedorUseCase.execute(id,data);

            response.status(200).json(upFornecedor)

            return;
        
        } catch (error:any) {
            response.status(400).json({error:error.message})
            return;
        }
    }
}