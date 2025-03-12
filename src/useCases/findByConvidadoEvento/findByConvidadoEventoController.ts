import { FindByConvidadoEventoUseCase } from "./findByConvidadoEventoUseCase";
import { Request,Response } from "express";

export class FindByConvidadoEventoController{
    constructor(private findByConvidadoEventoUseCase:FindByConvidadoEventoUseCase){}

    async handle(request:Request,response:Response){
       try {
            let {convidadoId,eventId} = request.body;
            let organizadorId = request.userId;

            let convidado = await this.findByConvidadoEventoUseCase.execute(convidadoId,eventId,organizadorId);

            response.status(200).json(convidado);
            return;
       } catch (error:any) {
            response.status(404).json({error:error.message}); 
            return; 
       }
    }
}