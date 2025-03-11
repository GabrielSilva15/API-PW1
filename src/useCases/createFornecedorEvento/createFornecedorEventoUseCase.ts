import { IFornecedorEventoRepository } from "../../repositories/IFornecedorEventoRepository"; 
import { IFornecedorRepository } from "../../repositories/IFornecedorRepository"; 
import { IEventRepository } from "../../repositories/IEventRepository"; 


export class CreateFornecedorEventoUseCase{
    constructor(private fornecedorEventoRepository:IFornecedorEventoRepository, private fornecedorRepository:IFornecedorRepository, private eventRepository:IEventRepository){}

    async execute(fornecedorId:string,eventId:string,organizadorId:string){
        
        const fornecedorExist = await this.fornecedorRepository.findById(fornecedorId);
        const eventExist = await this.eventRepository.findById(eventId);

        if(!fornecedorExist){
            throw Error("Fornecedor com esse id não existe!");
        }

        if(!eventExist){
            throw Error("Evento com esse id não existe!");
        }

        if(fornecedorExist.userId !== organizadorId || eventExist!.organizadorId === organizadorId){
            throw Error("O usuario que está tentando adicionar o fornecedor ao evento, não é seu criador!");
        }
        
        let createFornecedorEvento= await this.fornecedorEventoRepository.createFornecedorEvento(fornecedorId, eventId);
        
        return createFornecedorEvento;
    }
}