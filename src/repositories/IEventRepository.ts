import { Event } from "../types/Event";


export interface IEventRepository{
    findById(id:string):Promise<Event>
    findAll():Promise<Event[]>
    deleteEvent(id:string):Promise<void>
    findAllEventsByUserId(userId:string):Promise<Event[]>
    createEvent(event:Event):Promise<unknown>
    updateEvent(id:string,event:Event): Promise<unknown>
}

