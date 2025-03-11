import { FindUserUseCase } from "./findUserUseCase";
import { Request,Response } from "express";

export class FindUserController{
    constructor(private findUserUsecase:FindUserUseCase){}

    async handle(request:Request,response:Response){

        try {
            const {id} = request.params;
        
            let user = await this.findUserUsecase.execute(id);
         
            response.status(200).json(user);
            return ;
        } catch (error:any) {
            response.status(404).json({error:error.message});
            return;
        }
         
     
    }
}