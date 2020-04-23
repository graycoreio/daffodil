import { DaffCartErrorType } from './cart-error-type.enum';

export type DaffCartErrors = {
  [K in DaffCartErrorType]: string[]
}
