import { ConfirmaPresencaConvidadoUseCase } from "./confirmaPresencaConvidadoUseCase";
import { Request,Response } from "express";

export class ConfirmaPresencaConvidadoController{
    constructor(private confirmaPresencaConvidadoUseCase:ConfirmaPresencaConvidadoUseCase){}

    async handle(request:Request,response:Response){
        try {
            const {eventId} = request.body;
            const convidadoId = request.userId;

            let updateConvidado = await this.confirmaPresencaConvidadoUseCase.execute(convidadoId,eventId);

            response.status(200).json(updateConvidado);
            return;
        } catch (error:any) {
            response.status(400).json({error:error.message});
            return;
        }
    }
}
