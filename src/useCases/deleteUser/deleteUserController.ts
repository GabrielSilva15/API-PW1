import { DeleteUserUseCase } from "./deleteUserUseCase";
import { Request,Response } from "express";

export class DeleteUserController{
    constructor(private deleteUserUsecase:DeleteUserUseCase){}

    async handle(request:Request,response:Response){

        try {

            let id = request.userId;
            await this.deleteUserUsecase.execute(id);

            response.status(200).json("User deleted sucessfully");
            return;
        } catch (error) {
            response.status(400).json(error);
            return;
        }


    }
}