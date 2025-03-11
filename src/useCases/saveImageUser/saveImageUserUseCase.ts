import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "../../types/User";

export class SaveImageUserUseCase{

    constructor(private userRepository:IUserRepository){}

    async execute(id:string,image:string){
        
        const user = await this.userRepository.findById(id) as User;
        const newUser = {
            ...user,
            foto:image
        }

        if(!user){
            throw Error("Usuário não encontrado!");
        }

        let userUpdated = await this.userRepository.updateUser(id,newUser);
        return userUpdated;
    }
}