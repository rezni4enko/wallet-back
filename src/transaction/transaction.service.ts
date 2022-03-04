import { Transaction } from './transaction.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTransactionDto } from 'src/dto/create-transaction.dto';

@Injectable()
export class TransactionService {

   constructor(@InjectModel(Transaction) private transactionRepository: typeof Transaction) { }

   async createTransaction(dto: CreateTransactionDto) {
      const transaction = await this.transactionRepository.create(dto)
      return transaction
   }

   async getAllTransactions() {
      const transactions = await this.transactionRepository.findAll()
      return transactions
   }

}
