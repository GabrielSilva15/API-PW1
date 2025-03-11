import { FindByIdFornecedorUseCase } from "./findByIdFornecedorUseCase";
import { Request,Response } from "express";

export class FindByIdFornecedorController{
    constructor(private findByIdFornecedorUseCase:FindByIdFornecedorUseCase){}

    async handle(request:Request,response:Response){
        try {
            const {id} = request.params;
            let userId = request.userId;

            let fornecedor = await this.findByIdFornecedorUseCase.execute(id,userId);
            response.status(200).json(fornecedor);
            return;
        } catch (error:any) {
            response.status(404).json({error:error.message})
            return;
        }
    }
}