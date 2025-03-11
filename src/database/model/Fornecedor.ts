import { Column, Table, Model, ForeignKey, CreatedAt, DataType, UpdatedAt, PrimaryKey} from 'sequelize-typescript';
import User from './User';

@Table({
    timestamps:true,
    tableName:'fornecedores',
    modelName:'Fornecedor'
})

class Fornecedor extends Model{
    @Column({
        type:DataType.UUID,
        primaryKey:true,
        defaultValue:DataType.UUIDV4
    })
    declare id:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare name:string

    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    declare foto:string
    
    @CreatedAt
    declare createdAt:Date;
    
    @UpdatedAt
    declare updatedAt: Date;

    @ForeignKey(()=>User)
    @Column({
        type:DataType.UUID,
        allowNull:false
    })
    declare userId:string
}

export default Fornecedor;