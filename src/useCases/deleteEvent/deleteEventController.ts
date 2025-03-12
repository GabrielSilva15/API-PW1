import { DeleteEventUseCase } from "./deleteEventUseCase";
import { Request,Response } from "express";

export class DeleteEventController{
    constructor(private deleteEventUseCase:DeleteEventUseCase){}

    async handle(request:Request,response:Response){
        try {
            let {id} = request.params;
            let organizadorId = request.userId;

            await this.deleteEventUseCase.execute(id,organizadorId);

            response.status(200).json("Evento deletado com sucesso")
            return;
        } catch (error:any) {
            response.status(400).json({message:error.message});
            return;
        }
    }
}
