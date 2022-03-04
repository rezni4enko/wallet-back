import { Column, Model, DataType, Table } from 'sequelize-typescript'


interface TransactionDTO {
   transaction_value: string;

}

@Table({ tableName: 'transaction' })
export class Transaction extends Model<Transaction, TransactionDTO>{

   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;

   @Column({ type: DataType.INTEGER })
   transactionValue: number;

   @Column({ type: DataType.STRING, allowNull: true })
   transactionCategory: string;

   @Column({ type: DataType.STRING, allowNull: true })
   comment: string;
}