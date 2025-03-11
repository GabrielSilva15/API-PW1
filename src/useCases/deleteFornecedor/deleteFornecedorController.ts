import { DeleteFornecedorUseCase } from "./deleteFornecedorUseCase";
import { Request,Response } from "express";


export class DeleteFornecedorController{
    constructor(private deleteFornecedorUseCase:DeleteFornecedorUseCase){}

    async handle(request:Request,response:Response){
       try {
            const {id} = request.params;
            let userId = request.userId;

            await this.deleteFornecedorUseCase.execute(id,userId);

            response.status(200).json("Fornecedor deletado com sucesso!");
            return;
       } catch (error:any) {
            response.status(400).json({error:error.message})
            return;
       }
    }
}