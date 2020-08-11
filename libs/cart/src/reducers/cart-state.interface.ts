import { DaffCart } from '../models/cart';
import { DaffCartErrors } from './errors/cart-errors.type';

export interface DaffCartReducerState<T extends DaffCart = DaffCart> {
  cart: T,
  loading: boolean,
  errors: DaffCartErrors,
  resolved: boolean
}
