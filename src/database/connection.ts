import {Sequelize} from "sequelize-typescript";
import Event from "./model/Event";
import User from "./model/User";
import Convidado from "./model/Convidado";
import Fornecedor from "./model/Fornecedor";
import FornecedorEvento from "./model/FornecedorEvento";


function sequelizeInit(database:string, username:string,password:string,host:string){

    return new Sequelize({
        database,
        username,
        password,
        host,
        dialect:'postgres',
        models:[User,Event,Convidado,Fornecedor,FornecedorEvento]
    })
};



export default sequelizeInit;