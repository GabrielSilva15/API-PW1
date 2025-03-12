import { IEventRepository } from "../../repositories/IEventRepository"; 
import { IUserRepository } from "../../repositories/IUserRepository";
import { Event } from "../../types/Event";
import { User } from "../../types/User";

export class UpdateEventUseCase{
    constructor(private eventRepository:IEventRepository,private userRepository:IUserRepository){}

    async execute(id:string,event:any, idOrganizador:string){
        let oldEvent = await this.eventRepository.findById(id) as Event;
        let userEvent = await this.userRepository.findById(idOrganizador) as User;
        
        if(!oldEvent){
            throw Error("Esse ID não está relacionado a nenhum evento!");
        }

        if(userEvent.id !== oldEvent.organizadorId){
            throw Error("O usuario que esta tentando editar o evento nao é o organizador dele!");
        }


        let eventUpdate:Event={
            id:oldEvent.id,
            title:event.title || oldEvent.title,
            data:event.data || oldEvent.data,
            endereco:event.endereco || oldEvent.endereco,
            geolocalization:event.geolocalization || oldEvent.geolocalization,
            quantPart:event.quantPart || oldEvent.quantPart,
            description:event.description || oldEvent.description,
            horario:event.horario || oldEvent.horario,
            imagem:event.imagem || oldEvent.imagem,
            organizadorId:oldEvent.organizadorId
        }

        let updatedEvent = await this.eventRepository.updateEvent(id,eventUpdate);
        return updatedEvent;

    }
}