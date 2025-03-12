

export interface IConvidadoRepository{
    findAll():Promise<object[]>
    findAllEventosConvidado(convidadoId:string):Promise<object[]>
    findByConvidadosEvento(eventId:string):Promise<any>
    findByConvidadoEvento(convidadoId:string,eventId:string):Promise<any>
    createConvidado(convidadoId:string,eventId:string):Promise<object>
    updateConvidado(convidadoId:string,eventId:string,convidadoUpdated:any):Promise<unknown>
    deleteConvidado(convidadoId:string,eventoId:string):Promise<void>
}