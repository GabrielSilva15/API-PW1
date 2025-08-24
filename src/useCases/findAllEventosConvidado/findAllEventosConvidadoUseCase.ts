import { IConvidadoRepository } from "../../repositories/IConvidadoRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

export class FindAllEventosConvidadoUseCase{
    constructor(private convidadoRepository:IConvidadoRepository, private userRepository:IUserRepository){}
    
    async execute(convidadoId:string){
        let userExist = await this.userRepository.findById(convidadoId);

        if(!userExist){
            throw Error("Convidado que está sendo passado não existe!");
        }

        let eventosConvidado = await this.convidadoRepository.findAllEventosConvidado(convidadoId);
        console.log(eventosConvidado);
        

        return eventosConvidado;
    }
}