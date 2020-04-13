import { DaffCartReducerState } from './cart-state.interface';
import { DaffCart } from '../models/cart';

export interface DaffCartReducersState<T extends DaffCart = DaffCart> {
  cart: DaffCartReducerState<T>
}
