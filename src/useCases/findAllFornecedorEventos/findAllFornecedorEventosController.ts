import { FindAllFornecedorEventosUseCase } from "./findAllFornecedorEventosUseCase";
import { Request,Response } from "express";


export class FindAllFornecedorEventosController{
    constructor(private findAllFornecedorEventosUseCase:FindAllFornecedorEventosUseCase){}

    async handle(request:Request,response:Response){
        try {
            const {fornecedorId} = request.params;
            let userId = request.userId;

            let fornecedor = await this.findAllFornecedorEventosUseCase.execute(fornecedorId,userId);

            response.status(200).json(fornecedor);
            return;
        } catch (error:any) {
            response.status(404).json({error:error.message});
            return;
        }
    }
}