import { DaffCartReducerState } from './cart-state.interface';
import { DaffCart } from '../models/cart';
import { DaffCartOrderReducerState } from './cart-order-state.interface';

export interface DaffCartReducersState<T extends DaffCart = DaffCart> {
  cart: DaffCartReducerState<T>,
  order: DaffCartOrderReducerState
}
