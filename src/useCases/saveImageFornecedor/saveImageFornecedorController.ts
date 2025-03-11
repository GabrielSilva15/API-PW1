import { SaveImageFornecedorUseCase } from "./saveImageFornecedorUseCase"; 
import { Request,Response} from "express";
import path from "path";


export class SaveImageFornecedorController{
    constructor( private saveImageFornecedorUseCase:SaveImageFornecedorUseCase){}

    async handle(request:Request,response:Response){
        try {
            
            const requestImage = request.file;
            const idFornecedor = request.params.id;

            if(!requestImage){
                throw Error("É necessário enviar uma imagem!");
            }

            const fileName = requestImage?.filename || "";

            let fornecedorUpdated = await this.saveImageFornecedorUseCase.execute(idFornecedor, fileName);

            response.status(200).json(fornecedorUpdated);
            return;

        } catch (error:any) {
            response.status(400).json({Error:error.message});
            return;
        }
    }
}