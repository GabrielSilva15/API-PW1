import { IFornecedorRepository } from "../../repositories/IFornecedorRepository";

export class FindByIdFornecedorUseCase{
    constructor(private fornecedorRepository:IFornecedorRepository){}

    async execute(id:string, userId:string){
        let fornecedor = await this.fornecedorRepository.findById(id);
        if(!fornecedor){
            throw Error("Não existe fornecedor com esse ID!");
        }
        if(fornecedor.userId !== userId){
            throw Error("O usuário que está tentando acessar o fornecedor não é seu criador!");
        }

        return fornecedor;
    }
}