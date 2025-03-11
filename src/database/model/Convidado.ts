import { Column, Table, Model, ForeignKey, CreatedAt, DataType, UpdatedAt, PrimaryKey} from 'sequelize-typescript';
import User from './User';
import Event from './Event';

@Table({
    timestamps:true,
    tableName:'convidados',
    modelName:'Convidado'
})

class Convidado extends Model{

    @ForeignKey(()=>User)
    @Column({
        type:DataType.UUID,
        primaryKey:true
    })
    declare convidadoId:string

    @ForeignKey(()=>Event)
    @Column({
        type:DataType.UUID,
        primaryKey:true
    })
    declare eventId:string

    @Column({
        type:DataType.BOOLEAN,
        allowNull:false,
        defaultValue:false
    })
    declare presenca:boolean
}

export default Convidado;
