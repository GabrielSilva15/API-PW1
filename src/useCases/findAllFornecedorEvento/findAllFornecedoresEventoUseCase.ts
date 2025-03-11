import { IFornecedorEventoRepository } from "../../repositories/IFornecedorEventoRepository"; 
import { IEventRepository } from "../../repositories/IEventRepository";


export class FindAllFornecedoresEventoUseCase{
    constructor(private fornecedorEventoRepository:IFornecedorEventoRepository, private eventRepository:IEventRepository
    ){}

    async execute(eventId:string, organizadorId:string){

        let eventExist = await this.eventRepository.findById(eventId);

        if(!eventExist){
            throw Error("O evento não existe");
        }

        if(eventExist!.organizadorId !== organizadorId){
            throw Error("O usuario que está tentando acessar os fornecedores do evento não é o criador deles!");
        }

        let fornecedoresEventos = await this.fornecedorEventoRepository.findAll(eventId);
        return fornecedoresEventos;
    }
}