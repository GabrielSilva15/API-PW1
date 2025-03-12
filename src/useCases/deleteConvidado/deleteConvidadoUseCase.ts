import { IConvidadoRepository } from "../../repositories/IConvidadoRepository";
import { IEventRepository } from "../../repositories/IEventRepository"; 
import { IUserRepository } from "../../repositories/IUserRepository"; 
import { Event } from "../../types/Event";
import { User } from "../../types/User";

export class DeleteConvidadoUseCase{
    constructor(private convidadoRepository:IConvidadoRepository, private userRepository:IUserRepository, private eventRepository:IEventRepository){}

    async execute(convidadoId:string,eventId:string, organizadorId:string){

        const convidadoExist = await this.userRepository.findById(convidadoId) as User;
        const eventExist = await this.eventRepository.findById(eventId) as Event;
        
        if(!eventExist){
            throw Error("Evento com esse ID não foi encontrado");
        }

        if(eventExist!.organizadorId !== organizadorId){
            throw Error("O usuário que está tentando deletar o convidado, não é o organizador do evento!");
        }

        if(!convidadoExist){
            throw Error("Usuário com esse ID não foi encontrado");
        }
        
        await this.convidadoRepository.deleteConvidado(convidadoId,eventId);

        return;
    }
}