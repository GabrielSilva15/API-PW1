import { IEventRepository } from "../../repositories/IEventRepository"; 


export class FindByIdEventUseCase{
    constructor(private eventRepository:IEventRepository){}

    async execute(id:string,organizadorId:string){
        let event =  await this.eventRepository.findById(id);
        if(!event){
            throw Error("Evento não encontrado!");
        }

        if(event.organizadorId !== organizadorId){
            throw Error("O usuário que está buscando este evento não o seu organizador!");
        }
        return event;
    }
}