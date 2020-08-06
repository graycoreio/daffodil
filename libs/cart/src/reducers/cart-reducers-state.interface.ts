import { EntityState } from '@ngrx/entity';

import { DaffCartReducerState } from './cart-state.interface';
import { DaffCart } from '../models/cart';
import { DaffCartOrderReducerState } from './cart-order/cart-order-state.interface';
import { DaffCartOrderResult } from '../models/cart-order-result';
import { DaffCartItem } from '../models/cart-item';

export interface DaffCartReducersState<
	T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffCartItem = DaffCartItem
> {
	cart: DaffCartReducerState<T>,
	cartItems: EntityState<U>,
  order: DaffCartOrderReducerState<V>
}
