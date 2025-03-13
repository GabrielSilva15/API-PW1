import { IFornecedorRepository } from "../../repositories/IFornecedorRepository";
import { IFornecedorEventoRepository} from "../../repositories/IFornecedorEventoRepository";
export class DeleteFornecedorUseCase{
    constructor(private fornecedorRepository:IFornecedorRepository, private fornecedorEventoRepository:IFornecedorEventoRepository){}

    async execute(id:string, organizadorId:string){
        let fornecedorExist = await this.fornecedorRepository.findById(id);
        let fornecedorEventoExist = await this.fornecedorEventoRepository.findAllFornecedorEventos(id);

        console.log(fornecedorEventoExist)
        if(!fornecedorExist){
            throw Error("Não existe nenhum forcedor com esse ID!");
        }

        if(fornecedorExist!.userId !== organizadorId){
            throw Error("O usuário que está tentando deletar o forncedor não é seu criado!");
        }

        if(fornecedorEventoExist.length !== 0){

            throw Error("Existe evento ligado a este fornecedor, antes de apagar por favor apague a ligação do fornecedor com o(s) evento(s)");
        }
       
        await this.fornecedorRepository.deleteFornecedor(id);
        return "Fornecedor deletado com sucesso!";
    }
}