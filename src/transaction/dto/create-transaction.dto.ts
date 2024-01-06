import { IsNotEmpty, IsNumber, Validate } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';
import { User } from 'src/user/entities/user.entity';
import { TransactionTypeValidator } from '../validation-classes/typeValidation';

export class CreateTransactionDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  @IsNumber()
  amount: number;
  @Validate(TransactionTypeValidator)
  type: 'expense' | 'income';
  @IsNotEmpty()
  category: Category;
  user: User;
}
