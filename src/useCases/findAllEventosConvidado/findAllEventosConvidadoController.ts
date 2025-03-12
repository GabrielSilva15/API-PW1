import { FindAllEventosConvidadoUseCase } from "./findAllEventosConvidadoUseCase";
import { Request,Response } from "express";


export class FindAllEventosConvidadoController{
    constructor(private findAllEventosConvidadoUseCase:FindAllEventosConvidadoUseCase){}

    async handle(request:Request,response:Response){
        try {
            let convidadoId = request.userId;

            let eventosConvidado = await this.findAllEventosConvidadoUseCase.execute(convidadoId);

            response.status(200).json(eventosConvidado);
            return;
        } catch (error:any) {
            response.status(404).json({error:error.message})
            return;
        }
    }
}
