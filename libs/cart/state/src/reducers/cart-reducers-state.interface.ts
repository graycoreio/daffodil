import { EntityState } from '@ngrx/entity';

import {
  DaffCart,
  DaffCartOrderResult,
} from '@daffodil/cart';

import { DaffStatefulCartItem } from '../models/stateful-cart-item';
import { DaffCartOrderReducerState } from './cart-order/cart-order-state.interface';
import { DaffCartReducerState } from './cart-state.interface';

export interface DaffCartReducersState<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffStatefulCartItem = DaffStatefulCartItem
> {
  cart: DaffCartReducerState<T>;
  cartItems: EntityState<U>;
  order: DaffCartOrderReducerState<V>;
}
