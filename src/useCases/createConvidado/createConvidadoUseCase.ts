import { IConvidadoRepository } from "../../repositories/IConvidadoRepository"; 
import { IEventRepository } from "../../repositories/IEventRepository"; 
import { IUserRepository } from "../../repositories/IUserRepository"; 
import { EmailService } from "../../services/emailService.js";
import { User } from "../../types/User";
import { Event } from "../../types/Event";

export class CreateConvidadoUseCase{
    constructor(private convidadoRepository:IConvidadoRepository, 
        private eventRepository:IEventRepository,
        private userRepository:IUserRepository){}

    async execute(convidadoId:string,eventId:string,organizadorId:string){
        const emailService = new EmailService();
        const convidadoExist = await this.userRepository.findById(convidadoId) as User;
        const eventExist = await this.eventRepository.findById(eventId) as Event;
        const convidadoEventoExist = await this.convidadoRepository.findByConvidadoEvento(convidadoId,eventId);


        if(convidadoEventoExist){
            throw Error("O convidado já está na lista de convidados!");
        }
        
        if(!eventExist){
            throw Error("Não existe evento com esse ID");
        }

        if(eventExist.organizadorId === convidadoId){
            throw Error("O usuario que você esta tentando convidar é o organizador do evento!");
        }

        if(eventExist.organizadorId !== organizadorId){
            throw Error("O usuario que você esta tentando adicionar o convidado não é o organizador do evento!");
        }

        if(!convidadoExist){          
            throw Error("Não existe usuário com esse ID");
        }

        let createConvite= await this.convidadoRepository.createConvidado(convidadoId,eventId) as any;


        emailService.execute(convidadoExist.dataValues.email,eventExist.dataValues.title, `Você foi convidado para o evento:${eventExist.dataValues.title}`);

        return {
            convidadoId:createConvite.userId,
            nomeConvidado:convidadoExist.name,
            presenca:createConvite.presenca,
            eventId:createConvite.eventId,
            nomeEvento:eventExist.title
        };
    }
}