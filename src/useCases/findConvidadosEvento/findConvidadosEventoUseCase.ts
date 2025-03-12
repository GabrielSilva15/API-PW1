import { IConvidadoRepository } from "../../repositories/IConvidadoRepository";
import { IEventRepository } from "../../repositories/IEventRepository";


export class FindConvidadosEventoUseCase{
    constructor(private convidadoRepository:IConvidadoRepository,private eventRepository:IEventRepository){}

    async execute(eventId:string, organizadorId:string){
        let eventExist = await this.eventRepository.findById(eventId);
        if(!eventExist){
            throw Error("O evento que está tentando listar os convidados não existe!");
        }

        if(eventExist!.organizadorId !== organizadorId){
            throw Error("O usuário que está tentando listar os convidados do evento não é o organizador!");
        }
        
        let convidados = await this.convidadoRepository.findByConvidadosEvento(eventId);
        if(!convidados){
            throw Error("Evento com esse id não encontrado!");
        }
        return convidados;
    }
}