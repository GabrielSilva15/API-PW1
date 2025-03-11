import {Sequelize} from "sequelize-typescript";
import User from "./model/User";
import Fornecedor from "./model/Fornecedor";
import FornecedorEvento from "./model/FornecedorEvento";



function sequelizeInit(database:string, username:string,password:string,host:string){

    return new Sequelize({
        database,
        username,
        password,
        host,
        dialect:'postgres',
        models:[User, Fornecedor, FornecedorEvento]
    })
};

export default sequelizeInit;