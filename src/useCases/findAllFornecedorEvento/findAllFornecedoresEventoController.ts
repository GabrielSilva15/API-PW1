import { FindAllFornecedoresEventoUseCase } from "./findAllFornecedoresEventoUseCase"; 
import { Request,Response } from "express";

export class FindAllFornecedoresEventoController{
    constructor(private findAllFornecedoresEventoUseCase:FindAllFornecedoresEventoUseCase){}

    async handle(request:Request,response:Response){
        try {
            const {eventId} = request.params;
            let organizadorId = request.userId;
            let fornecedoresEventos = await this.findAllFornecedoresEventoUseCase.execute(eventId,organizadorId);
            response.status(200).json(fornecedoresEventos);
            return;
        } catch (error:any) {
            response.status(404).json({error:error.message});
            return;
        }
    }
}