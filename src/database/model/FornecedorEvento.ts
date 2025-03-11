import { Column, Table, Model, ForeignKey, CreatedAt, DataType, UpdatedAt, PrimaryKey} from 'sequelize-typescript';
import Fornecedor from './Fornecedor';
import Event from './Event';
import User from './User';

@Table({
    timestamps:true,
    tableName:'fornecedorEvento',
    modelName:'FornecedorEvento'
})

class FornecedorEvento extends Model{

    @ForeignKey(()=>Fornecedor)
    @Column({
        type:DataType.UUID,
        primaryKey:true
    })
    declare fornecedorId:string

    @ForeignKey(()=>Event)
    @Column({
        type:DataType.UUID,
        primaryKey:true
    })
    declare eventId:string

}

export default FornecedorEvento;
