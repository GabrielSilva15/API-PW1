import { IEventRepository } from "../../repositories/IEventRepository.js";

export class FindByIdEventImageUseCase{
    constructor(private EventRepository:IEventRepository){}

    async execute(id:string){
        const event = await this.EventRepository.findById(id);
        return event;
    }
}