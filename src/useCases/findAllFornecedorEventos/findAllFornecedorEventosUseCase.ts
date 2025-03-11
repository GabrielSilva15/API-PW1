import { IFornecedorEventoRepository } from "../../repositories/IFornecedorEventoRepository";
import { IFornecedorRepository } from "../../repositories/IFornecedorRepository";


export class FindAllFornecedorEventosUseCase{
    constructor(private fornecedorEventoRepository:IFornecedorEventoRepository,private fornecedorRepository:IFornecedorRepository
    ){}

    async execute(fornecedorId:string,organizadorId:string){
        let fornecedorExist = await this.fornecedorRepository.findById(fornecedorId);

        if(!fornecedorExist){
            throw Error("Não existe fornecedor com esse Id ligado a nenhum evento!");
        }

        if(fornecedorExist!.userId !== organizadorId){
            throw Error("O usuario que esta tentando listar os fornecedores não é o criador do fornecedor!");
        }

        let fornecedorEventos = await this.fornecedorEventoRepository.findAllFornecedorEventos(fornecedorId);

        return fornecedorEventos;
    }
}