import { IFornecedorRepository } from "../../repositories/IFornecedorRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import { Fornecedor } from "../../types/Fornecedor";

export class CreateFornecedorUseCase{
    constructor(private fornecedorRepository:IFornecedorRepository,private userRepository: IUserRepository){}

    async execute(data:any){

        const user = await this.userRepository.findById(data.userId);
            
        if(!user){
            throw Error("O usuario precisa estar logadopara adicionar o fornecedor!");
        }

        if(!user.organizador){
            throw Error("O Usuário não tem cpf ou idade inferior a 18 anos!");
        }

        let newFornecedor = new Fornecedor(data);
        let createFornecedor = await this.fornecedorRepository.createFornecedor(newFornecedor);
        return createFornecedor;
    }
}