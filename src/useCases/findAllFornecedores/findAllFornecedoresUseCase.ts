import { IFornecedorRepository } from "../../repositories/IFornecedorRepository";

export class FindAllFornecedoresUseCase{
    constructor(private fornecedorRepository:IFornecedorRepository){}

    async execute(userId:string){
        let fornecedores = await this.fornecedorRepository.findAll(userId);
        return fornecedores;
    }
}