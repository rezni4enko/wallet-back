import { TransactionService } from './transaction.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTransactionDto } from 'src/dto/create-transaction.dto';

@Controller('transaction')
export class TransactionController {

   constructor(private transactionService: TransactionService) { }

   @Get()
   getAll() {
      return this.transactionService.getAllTransactions()
   }

   // @Get(':id')
   // getOne(@Param('id') id: number) {
   //    return this.transactionService.getOneTransactions()
   // }

   @Post()
   create(@Body() transactionDto: CreateTransactionDto) {
      return this.transactionService.createTransaction(transactionDto)
   }


   // @Delete(':id')
   // async delete(@Param('id') id: number) {
   //    this.transactionService.deleteTransaction(id);
   // }

}
