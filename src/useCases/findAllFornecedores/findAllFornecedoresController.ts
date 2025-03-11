import { FindAllFornecedoresUseCase } from "./findAllFornecedoresUseCase";
import { Request,Response } from "express";

export class FindAllFornecedoresController{
    constructor(private findAllFornecedoresUseCase:FindAllFornecedoresUseCase){}

    async handle(request:Request,response:Response){
        try {

            let userId = request.userId;
            let fornecedores = await this.findAllFornecedoresUseCase.execute(userId);

            response.status(200).json(fornecedores);
            return;
        } catch (error:any) {
            response.status(404).json({error:error.message});
            return;
        }
    }
}