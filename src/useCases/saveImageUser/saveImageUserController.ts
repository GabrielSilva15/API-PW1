import { SaveImageUserUseCase } from "./saveImageUserUseCase";
import { Request,Response} from "express";

export class SaveImageUserController{
    constructor( private saveImageUserUseCase:SaveImageUserUseCase){}

    async handle(request:Request,response:Response){
        try {
            
            const requestImage = request.file;
            const fileName = requestImage!.filename;

            let updatedUser = await this.saveImageUserUseCase.execute(request.userId, fileName);
            
            response.status(200).json(updatedUser);

            return;

        } catch (error:any) {
            response.status(400).json({Error:error.message});
            return;
        }
    }
}