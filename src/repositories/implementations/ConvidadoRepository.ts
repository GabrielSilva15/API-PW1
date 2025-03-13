import { IConvidadoRepository } from "../IConvidadoRepository";
import ConvidadoModel from "../../database/model/Convidado";
import User from "../../database/model/User";
import Event from "../../database/model/Event";


export class ConvidadoRepository implements IConvidadoRepository{
    async createConvidado(convidadoId: string, eventId: string): Promise<object> {

        let createConvidado = await ConvidadoModel.create({convidadoId,eventId});
        return createConvidado;
    }

    async findAll(): Promise<object[]> {
        let convidados =  await ConvidadoModel.findAll();
      
        let result = [];

        for(const convidado of convidados){
                let convidadoDados = await User.findOne({
                    where:{
                    id:convidado.convidadoId
                }});
    
                let eventoDados =  await Event.findOne({
                    where:{
                    id:convidado.eventId
                }});
                
                result.push({
                    convidadoId:convidadoDados!.id,
                    nomeConvidado:convidadoDados!.name,
                    presenca:convidado!.presenca,
                    eventId:eventoDados!.id,
                    nomeEvento:eventoDados!.title
                })

        }

        return result;
    }

    async deleteConvidado(convidadoId: string, eventId: string): Promise<void> {

        await ConvidadoModel.destroy({
            where:{
                convidadoId,
                eventId
            }
        })
    }

    async findByConvidadosEvento(eventId:string): Promise<any> {
        let convidados = await ConvidadoModel.findAll({
            where:{
                eventId
            }
        })

        let result = [];

        for(const convidado of convidados){
                let convidadoDados = await User.findOne({
                    where:{
                    id:convidado.convidadoId
                }});
    
                let eventoDados =  await Event.findOne({
                    where:{
                    id:convidado.eventId
                }});
                
                result.push({
                    convidadoId:convidadoDados!.id,
                    nomeConvidado:convidadoDados!.name,
                    presenca:convidado.presenca,
                    eventId:eventoDados!.id,
                    nomeEvento:eventoDados!.title
                })

        }
        return result;
    }

    async findByConvidadoEvento(convidadoId: string, eventId: string): Promise<any> {
    
        let convidado =  await ConvidadoModel.findOne({
            where:{
                convidadoId,
                eventId
            }
        })
        
        return convidado
    }

    async updateConvidado(convidadoId: string,eventId:string, convidadoUpdated: any): Promise<unknown> {
        await ConvidadoModel.update({...convidadoUpdated},{
            where:{
                convidadoId,
                eventId
            }
        })

        let convidado = await ConvidadoModel.findOne({
            where:{
                convidadoId,
                eventId
            }
        })

        return convidado;
    }

    async findAllEventosConvidado(convidadoId: string): Promise<object[]> {
        let eventosConvidado = await ConvidadoModel.findAll({
            where:{
                convidadoId
            }
        })

        return eventosConvidado;
    }
    
}