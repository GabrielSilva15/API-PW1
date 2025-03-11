import { v4 } from "uuid";

export class Fornecedor{
    public readonly id!:string
    public name!:string
    public foto?: string
    public userId!:string


    constructor(props:Omit<Fornecedor, "id">, id?:string){
        Object.assign(this,props);
        if(!id){
            this.id=v4();
        }
    }
}