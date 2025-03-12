import { IEventRepository } from "../../repositories/IEventRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

export class FindAllEventsByUserIdUseCase{
    constructor(private EventRepository:IEventRepository, private UserRepository:IUserRepository){}

    async execute(userId:string){
        let userExists = await this.UserRepository.findById(userId);

        if(!userExists){
            throw Error("O usuário com esse id não existe!");
        }
        if(userExists.organizador === false){
            throw Error("O usuário buscado não é organizador!");
        }

        let eventos = await this.EventRepository.findAllEventsByUserId(userId);
        return eventos;
    }
}