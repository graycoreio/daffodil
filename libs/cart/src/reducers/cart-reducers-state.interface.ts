import { DaffCartReducerState } from './cart-state.interface';
import { DaffCart } from '../models/cart';
import { DaffCartOrderReducerState } from './cart-order-state.interface';
import { DaffCartOrderResult } from '../models/cart-order-result';

export interface DaffCartReducersState<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult
> {
  cart: DaffCartReducerState<T>,
  order: DaffCartOrderReducerState<V>
}
