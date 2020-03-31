import { DaffCart } from '../models/cart';
import { DaffCartErrors } from './cart-errors.type';

export interface DaffCartReducerState<T extends DaffCart> {
  cart: T,
  loading: boolean,
  errors: DaffCartErrors
}
