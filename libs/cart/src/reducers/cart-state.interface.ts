import { DaffCart } from '../models/cart';
import { DaffCartErrors } from './errors/cart-errors.type';
import { DaffCartLoading } from './loading/cart-loading.type';

export interface DaffCartReducerState<T extends DaffCart = DaffCart> {
  cart: T,
  loading: DaffCartLoading,
  errors: DaffCartErrors,
  resolved: boolean
}
