import { IConvidadoRepository } from "../../repositories/IConvidadoRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IEventRepository } from "../../repositories/IEventRepository";

export class ConfirmaPresencaConvidadoUseCase{
    constructor(private convidadoRepository:IConvidadoRepository,private eventRepository:IEventRepository ,private userRepository:IUserRepository){}

    async execute(convidadoId:string,eventId:string){


        let convidadoExist = await this.userRepository.findById(convidadoId);
        let eventExist = await this.eventRepository.findById(eventId);

        if(!eventExist){
            throw Error("Esse ID não está associado a nenhum evento!");
        }
        
        if(!convidadoExist){
            throw Error("Esse ID não está associado a nenhum usuário!");
        }
        
        let convidado = await this.convidadoRepository.findByConvidadoEvento(convidadoId,eventId);

        if(!convidado){
            throw Error("Nenhum convidado com esse id está nesse evento!");
        }

        let newConvidado = {
            ...convidado,
            presenca:true
        }

        let updatedConvidado = await this.convidadoRepository.updateConvidado(convidadoId,eventId,newConvidado);

        return updatedConvidado;

    }
}
