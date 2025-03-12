import { IEventRepository } from "../IEventRepository";
import { Event } from "../../types/Event";
import EventModel from "../../database/model/Event";
import e from "express";

export class EventRepository implements IEventRepository{
    async findById(id: string): Promise<Event> {
        let event = await EventModel.findOne({
            where:{
                id
            }
        }) as any;

        return event;
    }

    async findAll(): Promise<Event[]> {
        
        let result = await EventModel.findAll();
         let events: Event[] = [];
        
        result.forEach((event:any )=>{
            events.push(event);
        })
             
        return events;
    }

    async deleteEvent(id: string): Promise<void> {
         await EventModel.destroy({
            where:{
                id
            }
        })
    }

    async createEvent(event: Event): Promise<unknown> {
        let evento =  new Event(event);
        
        let newEvent = await EventModel.create({...evento});
        return newEvent;
    }

    async updateEvent(id: string, event: Event): Promise<unknown> {
        await EventModel.update({...event},{
                where:{
                    id
                }
        });

        let updatedEvent = await EventModel.findOne({
            where:{
                id
            }
        })

        return updatedEvent;
    }

    async findAllEventsByUserId(userId: string): Promise<Event[]> {
        let eventos = await EventModel.findAll({
            where:{
                organizadorId:userId
            }
        }) 

        let eventosUser:Event[]=[];

        eventos.forEach((evento:any)=>{
            eventosUser.push(evento);
        })

        return eventosUser;
    }
}