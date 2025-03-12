import { FindAllEventsByUserIdUseCase } from "./findAllEventsByUserIdUseCase"; 
import { Request,Response } from "express";

export class FindAllEventsByUserIdController{
    constructor(private findAllEventsByUserIdUseCase:FindAllEventsByUserIdUseCase){}

    async handle(request:Request,response:Response){
        try {
            const userId = request.userId;

            let eventos = await this.findAllEventsByUserIdUseCase.execute(userId);
            response.status(200).json(eventos);
            return;
        } catch (error:any) {
            response.status(404).json({error:error.message})
            return;
        }

    }
}