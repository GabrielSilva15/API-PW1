import { IEventRepository } from "../../repositories/IEventRepository"; 
import { Event } from "../../types/Event";
import { IUserRepository } from "../../repositories/IUserRepository";

export class CreateEventUseCase{    
    constructor(private eventRepository:IEventRepository,private userRepository: IUserRepository){}

    async execute(data:any){

        const idOrganizador = data.organizadorId;
        const user = await this.userRepository.findById(idOrganizador);

        if(!user){
            throw Error("O ID passado para ser organizador deste evento não existe!");
        }

        if(!user.organizador){
            throw Error("O Usuário não tem cpf ou idade inferior a 18 anos!");
        }

        let newEvent = new Event({
            ...data,
            description:data.description ? data.description : null,
            imagem:data.imagem ? data.imagem : null,
            horario:data.horario ? data.horario : null
        })

        await this.eventRepository.createEvent(newEvent);

        return newEvent;
    }
}