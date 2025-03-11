import { CreateFornecedorEventoUseCase } from "./createFornecedorEventoUseCase"; 
import { Request,Response } from "express";


export class CreateFornecedorEventoController{
    constructor(private createFornecedorEventoUseCase:CreateFornecedorEventoUseCase){}

    async handle(request:Request,response:Response){
        try {

            const {fornecedorId,eventId} = request.body;
            let organizadorId = request.userId;
            
            let createFornecedorEvento = await this.createFornecedorEventoUseCase.execute(fornecedorId,eventId,organizadorId);
            response.status(201).json(createFornecedorEvento);
            return;

        } catch (error:any) {
            response.status(400).json({error:error.message});
            return;
        }

    }
}