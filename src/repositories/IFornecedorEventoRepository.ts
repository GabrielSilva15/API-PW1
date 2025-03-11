export interface IFornecedorEventoRepository{
    findAll(eventId:string):Promise<any[]>
    findAllFornecedorEventos(id:string):Promise<unknown>
    createFornecedorEvento(fornecedorId:string,eventId:string):Promise<any>
    deleteFornecedorEvento(fornecedorId:string,eventoId:string):Promise<void>
}