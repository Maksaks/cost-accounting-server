import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionService } from 'src/transaction/transaction.service';
import { Transaction } from '../transaction/entities/transaction.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Transaction])],
  controllers: [CategoryController],
  providers: [CategoryService, TransactionService],
})
export class CategoryModule {}
