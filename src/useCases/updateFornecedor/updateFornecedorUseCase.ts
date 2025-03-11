import { IFornecedorRepository } from "../../repositories/IFornecedorRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "../../types/User";

export class UpdateFornecedorUseCase{
    constructor(private fornecedorRepository:IFornecedorRepository, private userRepository:IUserRepository){}

    async execute(id:string,data:any){
        let fornecedorExist = await this.fornecedorRepository.findById(id);
        let userFornecedor = await this.userRepository.findById(fornecedorExist!.userId) as User;

        if(userFornecedor.id !== fornecedorExist!.userId){
            throw Error("O usuario que esta tentando editar o fornecedor não é o criador dele!");
        }

        if(!userFornecedor){
            throw Error("Esse ID não está relacionado a nenhum evento!");
        }        

        if(!fornecedorExist){
            throw Error("Esse ID não está relacionado a nenhum fornecedor!");
        }

        let fornecedorUpdated = await this.fornecedorRepository.updateFornecedor(id,data);

        return fornecedorUpdated;
    }

}