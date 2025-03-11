import { FindAllUsersUseCase } from "./findAllUsersUseCase";
import { Request,Response } from "express";

export class FindAllUsersController{

    constructor(private findAllUsersUseCase:FindAllUsersUseCase){}

    async handle(request:Request,response:Response){

        try {
            const users = await this.findAllUsersUseCase.execute();
        
            response.status(200).json(users);
            
            return;
        } catch (error:any) {
            response.status(404).json({error:error.message});
            return;
        }
    }
}