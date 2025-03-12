import { IEventRepository } from "../../repositories/IEventRepository"; 
import { IFornecedorEventoRepository } from "../../repositories/IFornecedorEventoRepository";
import { IConvidadoRepository } from "../../repositories/IConvidadoRepository";

export class DeleteEventUseCase{
    constructor(private eventRepository:IEventRepository){}

    async execute(id:string, organizadorId:string){
        let eventExist = await this.eventRepository.findById(id);
        if(!eventExist){
            throw Error("Não existe evento com esse ID!");
        }

        if(eventExist.organizadorId !== organizadorId){
            throw Error("O usuário que está tentando deletar o evento não é seu criador!");
        }
        await this.eventRepository.deleteEvent(id);
        
        return "Evento deletado com sucesso!";
    }
}