import { IUserRepository } from "../../repositories/IUserRepository";

export class FindByIdUserImageUseCase{
    constructor(private UserRepository:IUserRepository){}

    async execute(id:string){
        const user = await this.UserRepository.findById(id);
        return user;
    }
}