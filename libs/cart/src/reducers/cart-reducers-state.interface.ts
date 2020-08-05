import { EntityState } from '@ngrx/entity';

import { DaffCartReducerState } from './cart-state.interface';
import { DaffCart } from '../models/cart';
import { DaffCartOrderReducerState } from './cart-order/cart-order-state.interface';
import { DaffCartOrderResult } from '../models/cart-order-result';
import { DaffCartItem } from '../models/cart-item';

export interface DaffCartReducersState<
	T extends DaffCart = DaffCart,
  V extends DaffCartItem = DaffCartItem,
  U extends DaffCartOrderResult = DaffCartOrderResult
> {
	cart: DaffCartReducerState<T>,
	cartItems: EntityState<V>,
  order: DaffCartOrderReducerState<U>
}
