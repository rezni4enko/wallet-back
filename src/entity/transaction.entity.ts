import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'transaction' })
export class TransactionEntity {
   @PrimaryGeneratedColumn({
      type: 'integer'
   })
   id: number

   @Column({
      type: 'integer'
   })
   transactionValue?: number

   @Column({
      type: 'varchar'
   })
   transactionCategory?: string

   @Column({
      type: 'varchar'
   })
   comment?: string

}
