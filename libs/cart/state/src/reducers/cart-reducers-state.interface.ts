import { EntityState } from '@ngrx/entity';
import { DaffCart, DaffCartOrderResult, DaffCartItem } from '@daffodil/cart';

import { DaffCartReducerState } from './cart-state.interface';
import { DaffCartOrderReducerState } from './cart-order/cart-order-state.interface';

export interface DaffCartReducersState<
	T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffCartItem = DaffCartItem
> {
	cart: DaffCartReducerState<T>,
	cartItems: EntityState<U>,
  order: DaffCartOrderReducerState<V>
}
