import { DeleteFornecedorEventoUseCase } from "./deleteFornecedorEventoUseCase"; 
import { Request,Response } from "express";


export class DeleteFornecedorEventoController{
    constructor(private deleteFornecedorEventoUseCase:DeleteFornecedorEventoUseCase){}

    async handle(request:Request,response:Response){
        try {
            const {fornecedorId,eventId} = request.body;
            let organizadorId = request.userId;

            await this.deleteFornecedorEventoUseCase.execute(fornecedorId,eventId,organizadorId);

            response.status(200).json("Fornecedor deletado com sucesso do evento");
            return;

        } catch (error:any) {
            response.status(400).json({error:error.message});
            return;
        }
    }
}