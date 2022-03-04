import { TransactionService } from './transaction.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTransactionDto } from 'src/dto/create-transaction.dto';

@Controller('transaction')
export class TransactionController {

   constructor(private transactionService: TransactionService) { }

   @Post()
   create(@Body() transactionDto: CreateTransactionDto) {
      return this.transactionService.createTransaction(transactionDto)
   }

   @Get()
   getAll() {
      return this.transactionService.getAllTransactions()
   }

}
