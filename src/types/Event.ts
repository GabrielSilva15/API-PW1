import {v4} from "uuid";

export class Event{
    public readonly id!: string
    public title!: string
    public description?: string 
    public quantPart!: number
    public data!: string
    public imagem?: string
    public horario?: string
    public geolocalization!: object
    public endereco!: string
    public organizadorId!: string


    
    constructor(props: Omit<Event,"id">, id?:string){
        Object.assign(this,props);
        if(!id){
            this.id=v4();
        }
    }
}
