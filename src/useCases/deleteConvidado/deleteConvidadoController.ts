import { DeleteConvidadoUseCase } from "./deleteConvidadoUseCase";
import { Request,Response } from "express";


export class DeleteConvidadoController{
    constructor(private deleteConvidadoUseCase:DeleteConvidadoUseCase){}

    async handle(request:Request,response:Response){
        try {
            const {convidadoId,eventId} = request.body;
            let organizadorId = request.userId;

            await this.deleteConvidadoUseCase.execute(convidadoId,eventId,organizadorId);

            response.status(200).json("Convidado deletado com sucesso do evento");
            return;

        } catch (error:any) {
            response.status(400).json({error:error.message});
            return;
        }
    }
}