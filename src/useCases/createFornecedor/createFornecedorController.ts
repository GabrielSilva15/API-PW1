import { CreateFornecedorUseCase } from "./createFornecedorUseCase";
import { Request,Response } from "express";
import { createFornecedorDTO } from "./createFornecedorDTO";
import {z} from "zod";

export class CreateFornecedorController{
    constructor(private createFornecedorUseCase:CreateFornecedorUseCase){}

    async handle(request:Request,response:Response){

       try {
            createFornecedorDTO.parse(request.body);

            const userId = request.userId;

            const data:z.infer<typeof createFornecedorDTO> = request.body;

            const createFornecedor = await this.createFornecedorUseCase.execute({...data,userId});
            response.status(201).json(createFornecedor);
            return;
       } catch (error:any) {
            response.status(400).json({error:error.message});
            return;
       }
    }
}