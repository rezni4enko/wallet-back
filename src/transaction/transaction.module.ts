import { Transaction } from './transaction.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TransactionEntity } from 'src/entity/transaction.entity';
import { TransactionRepository } from './transaction.repositary';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService],
  imports: [
    SequelizeModule.forFeature([Transaction]),

  ]
})
export class TransactionModule { }
