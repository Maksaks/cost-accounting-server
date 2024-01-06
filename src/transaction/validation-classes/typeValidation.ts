/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'typeTransaction', async: false })
export class TransactionTypeValidator implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return text.startsWith('expense') || text.startsWith('income');
  }

  defaultMessage(args: ValidationArguments) {
    return 'Type must be expense or income';
  }
}
