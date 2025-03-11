import { Column, Table, Model, ForeignKey, CreatedAt, DataType, UpdatedAt} from 'sequelize-typescript';

@Table({
    timestamps:true,
    tableName:'users',
    modelName:'User'
})

class User extends Model{
    @Column({
        primaryKey:true,
        type:DataType.UUID,
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
        allowNull:false
    })
    declare email:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare password:string

    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    declare cpf:string

    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    declare foto:string
    
    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    declare telefone:string

    @Column({
        type:DataType.INTEGER,
        allowNull:true
    })
    declare idade:number

    @Column({
        type:DataType.BOOLEAN,
        allowNull:true
    })
    declare organizador:boolean

    @CreatedAt
    declare createdAt:Date;

    @UpdatedAt
    declare updatedAt: Date;
}

export default User;