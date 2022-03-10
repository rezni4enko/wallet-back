import { Transaction } from './transaction.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTransactionDto } from 'src/dto/create-transaction.dto';
import { TransactionRepository } from './transaction.repositary';

@Injectable()
export class TransactionService {

   // constructor(private readonly transactionRepository: TransactionRepository) { }

   constructor(@InjectModel(Transaction) private transactionRepository: typeof Transaction) { }

   async createTransaction(dto: CreateTransactionDto) {
      const transaction = await this.transactionRepository.create(dto)
      return transaction
   }

   async getAllTransactions() {
      const transactions = await this.transactionRepository.findAll()
      return transactions
   }

   // async getOneTransactions(id: number) {
   //    const transactions = await this.transactionRepository.quary(id)
   //    return transactions
   // }

   // async deleteTransaction(id: number) {
   //    return await this.transactionRepository.f
   // }
}
