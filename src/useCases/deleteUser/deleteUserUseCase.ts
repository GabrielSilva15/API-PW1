import { IUserRepository } from "../../repositories/IUserRepository";

export class DeleteUserUseCase{
    constructor(private userRepository:IUserRepository){}

    async execute(id:string){
        let userExist = await this.userRepository.findById(id);
        if(!userExist){
            throw Error("Não existe usuário com esse ID!");
        }
        await this.userRepository.deleteUser(id);
        return "User deleted sucessfully!";
    }
}