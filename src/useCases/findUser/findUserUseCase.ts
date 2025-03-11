import { IUserRepository } from "../../repositories/IUserRepository";

export class FindUserUseCase{
    constructor(private userRepository:IUserRepository){}

    async execute(id:string){
        let user =  await this.userRepository.findById(id);
        if(!user){
            throw Error("Usuario com esse id não encontrado!");
        }
        return user;
    }
}