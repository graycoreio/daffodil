import { MagentoCartUserInputErrorType } from './user-error.enum';

export interface MagentoCartUserInputError {
  message: string;
  code: MagentoCartUserInputErrorType;
}
