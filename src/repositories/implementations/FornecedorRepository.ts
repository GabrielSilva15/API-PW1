import { Fornecedor } from "../../types/Fornecedor";
import { IFornecedorRepository } from "../IFornecedorRepository";
import FornecedorModel from "../../database/model/Fornecedor";
export class FornecedorRepository implements IFornecedorRepository{
    async findAll(userId:string): Promise<Fornecedor[]> {
        let fornecedores = await FornecedorModel.findAll({
            where:{
                userId
            }
        });
        return fornecedores;
    }

    async createFornecedor(fornecedor:Fornecedor): Promise<Fornecedor> {
        let fornecedorCreate = new Fornecedor(fornecedor);
        let newFornecedor =  await FornecedorModel.create({...fornecedorCreate});
        return newFornecedor;
    }

    async findById(id: string): Promise<Fornecedor | null> {
        let fornecedor= await FornecedorModel.findOne({
            where:{
                id
            }
        })
        return fornecedor;
    }

    async updateFornecedor(id: string, data: any): Promise<unknown> {
        await FornecedorModel.update(data,{
            where:{
                id
            }});

        let fornecedorUpdated = await FornecedorModel.findOne({
            where:{
                id
            }
        })
            

        return fornecedorUpdated;
    }

    async deleteFornecedor(id: string): Promise<void> {
        await FornecedorModel.destroy({
            where:{
                id
            }
        })

        return;
    }
    
}