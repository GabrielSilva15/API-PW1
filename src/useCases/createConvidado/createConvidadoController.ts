import { CreateConvidadoUseCase } from "./createConvidadoUseCase";
import { Request,Response } from "express";


interface Convidado{
    convidadoId:string,
    nomeConvidado:string,
    eventId:string,
    nomeEvento:string
}


export class CreateConvidadoController{
    constructor(private createConvidadoUseCase:CreateConvidadoUseCase){}

    async handle(request:Request,response:Response){
        try {

            const {convidadoId} = request.body;
            const {eventId} = request.params;
            let organizadorId =  request.userId;

            let createConvidado = await this.createConvidadoUseCase.execute(convidadoId,eventId,organizadorId) as Convidado;

            response.status(201).json(createConvidado);
            return;

        } catch (error:any) {
            response.status(400).json({error:error.message});
            return;
        }

    }
}