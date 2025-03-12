import { IConvidadoRepository } from "../../repositories/IConvidadoRepository";
import { IEventRepository } from "../../repositories/IEventRepository";
import { IUserRepository } from "../../repositories/IUserRepository";


export class FindByConvidadoEventoUseCase{
    constructor(private convidadoRepository:IConvidadoRepository, private userRepository:IUserRepository, private eventRepository:IEventRepository){}

    async execute(convidadoId:string,eventId:string,organizadorId:string){
        let convidadoExist = await this.userRepository.findById(convidadoId);
        let eventExist = await this.eventRepository.findById(eventId);

        if(!eventExist){
            throw Error("Esse ID não está associado a nenhum evento!");
        }

        if(eventExist.organizadorId !== organizadorId){
            throw Error("O usuário que está tentando listar o convidado não é o criador do evento!");
        }

        if(!convidadoExist){
            throw Error("Esse ID não está associado a nenhum usuário!");
        }


        let convidado =  await this.convidadoRepository.findByConvidadoEvento(convidadoId,eventId);

        if(!convidado){
            throw Error("Nenhum convidado com esse id está nesse evento!");
        }

        return convidado;
    }
}