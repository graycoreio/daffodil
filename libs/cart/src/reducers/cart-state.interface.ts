import { DaffCart } from '../models/cart';
import { DaffCartErrors } from './cart-errors.type';

export interface DaffCartReducerState {
  cart: DaffCart,
  loading: boolean,
  errors: DaffCartErrors
}
