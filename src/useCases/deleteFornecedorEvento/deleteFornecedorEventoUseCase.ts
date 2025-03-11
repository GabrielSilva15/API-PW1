import { IFornecedorEventoRepository } from "../../repositories/IFornecedorEventoRepository"; 
import { IFornecedorRepository } from "../../repositories/IFornecedorRepository"; 
import { IEventRepository } from "../../repositories/IEventRepository"; 


export class DeleteFornecedorEventoUseCase{
    constructor(private fornecedorEventoRepository:IFornecedorEventoRepository, private fornecedorRepository:IFornecedorRepository, private eventRepository:IEventRepository){}

    async execute(fornecedorId:string,eventId:string,organizadorId:string){

        let fornecedorExist = await this.fornecedorRepository.findById(fornecedorId);
        let eventExist = await this.eventRepository.findById(eventId);

        if(!fornecedorExist){
            throw Error("Fornecedor com esse ID não existe");
        }

        if(fornecedorExist!.userId !== organizadorId){
            throw Error("O usuário que está tentando deletar o forncedor não é o criador do fornecedor!")
        }

        if(!eventExist){
            throw Error("Evento com esse ID não existe");
        }

        if(eventExist!.organizadorId !== organizadorId){
            throw Error("O usuário que está tentando deletar o fornecedor não é o criador do evento!");
        }

        await this.fornecedorEventoRepository.deleteFornecedorEvento(fornecedorId,eventId);
        return "Fornecedor do evento deletado com sucesso!";
    }
}