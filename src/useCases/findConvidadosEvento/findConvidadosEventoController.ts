import { FindConvidadosEventoUseCase } from "./findConvidadosEventoUseCase"; 
import { Request,Response } from "express";


export class FindConvidadosEventoController{
    constructor(private findConvidadosEventoUseCase:FindConvidadosEventoUseCase){}

    async handle(request:Request,response:Response){
        try {
            let eventoId = request.params.eventId;
            let userId = request.userId;
            
            let convidados =  await this.findConvidadosEventoUseCase.execute(eventoId,userId);
            
            response.status(200).json(convidados);
            return;
        } catch (error:any) {
            response.status(404).json({error:error.message});
            return;
        }
    }
}