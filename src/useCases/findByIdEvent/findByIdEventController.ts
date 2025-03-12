import { FindByIdEventUseCase } from "./findByIdEventUseCase";
import { Request,Response } from "express";


export class FindByIdEventController{
    constructor(private findByIdEventUseCase:FindByIdEventUseCase){}

    async handle(request:Request,response:Response){
        try {
            let {id} = request.params;
            let organizadorId= request.userId;

            let event = await this.findByIdEventUseCase.execute(id,organizadorId);
            response.status(200).json(event);
            return;
        } catch (error:any) {
            response.status(404).json({message:error.message});
            return;
        }
    }
}