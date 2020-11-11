import { DaffCartOperationType } from '../cart-operation-type.enum';

export type DaffCartErrors = {
  [K in DaffCartOperationType]: string[]
}
