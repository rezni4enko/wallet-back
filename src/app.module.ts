import { Transaction } from './transaction/transaction.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TransactionModule } from './transaction/transaction.module';
import { ConfigModule } from '@nestjs/config'

@Module({

  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 3002,
      username: 'postgres',
      password: '8836612',
      database: 'transaction',
      models: [Transaction],
      autoLoadModels: true
    }),
    TransactionModule,
  ],
})
export class AppModule { }
