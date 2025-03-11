import { IFornecedorEventoRepository } from "../IFornecedorEventoRepository"; 
import FornecedorEvento from "../../database/model/FornecedorEvento";
import Fornecedor from "../../database/model/Fornecedor";
import Event from "../../database/model/Event";

export class FornecedorEventoRepository implements IFornecedorEventoRepository{
    async findAll(eventId:string): Promise<any[]> {
        let fornecedoresEventos = await FornecedorEvento.findAll({
            where:{
                eventId
            }
        });

        let result = [];

        for(const fornecedor of fornecedoresEventos){
                let fornecedorDados = await Fornecedor.findOne({
                    where:{
                    id:fornecedor.fornecedorId
                }});

                if(!fornecedorDados){
                    throw Error("Não foi possível encontrar o fornecedor que está cadastro no evento")
                }
                
    
                let eventoDados =  await Event.findOne({
                    where:{
                    id:fornecedor.eventId
                }});

                if(!eventoDados){
                    throw Error("Não foi possível encontrar o evento que está cadastro nesse fornecedor")
                }
                
                
                result.push({
                    fornecedorId:fornecedorDados!.id,
                    nomeFornecedor:fornecedorDados!.name,
                    eventId:eventoDados!.id,
                    nomeEvento:eventoDados!.title
                })

        }
        return result;
     
    }

    async createFornecedorEvento(fornecedorId:string,eventId:string): Promise<object> {
        let createFornecedorEvento = await FornecedorEvento.create({fornecedorId,eventId});
        return createFornecedorEvento;
    }

    async deleteFornecedorEvento(fornecedorId: string, eventId: string): Promise<void> {
        await FornecedorEvento.destroy({
            where:{
                fornecedorId,
                eventId
            }
        })
    }

    async findAllFornecedorEventos(fornecedorId: string): Promise<unknown> {
        let fornecedorEvento = await FornecedorEvento.findAll({
            where:{
                fornecedorId
            }
        });

        return fornecedorEvento;
    }
    
}