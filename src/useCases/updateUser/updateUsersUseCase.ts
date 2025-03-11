import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "../../types/User";

export class UpdateUsersUseCase{
    constructor(private userRepository:IUserRepository){}

    async execute(data:any, id:string){
        let userExist = await this.userRepository.findById(id) as User; 
        
        if(!userExist){
            throw Error("Esse ID não está relacionado a nenhum usuário!");
        }
        
        if(data.cpf){
            let cpfExist = await this.userRepository.findByCPF(data.cpf);
            if(cpfExist)throw Error("O cpf que você está tentando adicionar já está cadastrado no sistema, por favor informe outro!");
        }
        
        if(data.email){
            let emailExist = await this.userRepository.findByEmail(data.email);
            if(emailExist)throw Error("O email que você está tentando adicionar já está cadastrado no sistema, por favor informe outro!");
        }


        const updateUser: User ={
                id:userExist.id,
                name:data.name || userExist.name,
                cpf:data.cpf || userExist.cpf,
                email:data.email || userExist.email,
                foto:data.foto || userExist.foto,
                idade:data.idade || userExist.idade,
                password:userExist.password,
                telefone:data.telefone || userExist.telefone
        }
        if(data.idade >= 18 && data.cpf){
            updateUser.organizador = true;
        }else{
            updateUser.organizador = false;
        }
        
        let userUpdated = await this.userRepository.updateUser(id,updateUser);

        return userUpdated;
    }
}