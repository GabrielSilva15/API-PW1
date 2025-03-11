import { IFornecedorRepository } from "../../repositories/IFornecedorRepository"; 
import { Fornecedor } from "../../types/Fornecedor";

export class SaveImageFornecedorUseCase{

    constructor(private fornecedorRepository:IFornecedorRepository){}

    async execute(id:string,foto:string){
        const fornecedor = await this.fornecedorRepository.findById(id) as Fornecedor;

        if(!fornecedor){
            throw Error("Usuário não encontrado!");
        }

        const newFornecedor = {
            ...fornecedor,
            foto
        }


        let fornecedorUpdated = await this.fornecedorRepository.updateFornecedor(id,newFornecedor);
        return fornecedorUpdated;
    }
}