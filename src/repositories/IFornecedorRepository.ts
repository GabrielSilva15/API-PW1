import { Fornecedor } from "../types/Fornecedor"

export interface IFornecedorRepository{
    findAll(userId:string):Promise<Fornecedor[]>
    createFornecedor(fornecedor:Fornecedor):Promise<Fornecedor>
    findById(id:string):Promise<Fornecedor | null>
    updateFornecedor(id:string,data:any):Promise<unknown>
    deleteFornecedor(id:string):Promise<void>
}