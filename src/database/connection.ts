import {Sequelize} from "sequelize-typescript";
import User from "./model/User";




function sequelizeInit(database:string, username:string,password:string,host:string){

    return new Sequelize({
        database,
        username,
        password,
        host,
        dialect:'postgres',
        models:[User]
    })
};

export default sequelizeInit;