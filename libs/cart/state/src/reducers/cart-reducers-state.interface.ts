import { EntityState } from '@ngrx/entity';

import {
  DaffCart,
  DaffCartOrderResult,
} from '@daffodil/cart';

import { DaffCartOrderReducerState } from './cart-order/cart-order-state.interface';
import { DaffCartReducerState } from './cart-state.interface';
import { DAFF_CART_STORE_FEATURE_KEY } from './cart-store-feature-key';
import { DaffStatefulCartItem } from '../models/stateful-cart-item';

export interface DaffCartReducersState<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffStatefulCartItem = DaffStatefulCartItem
> {
  cart: DaffCartReducerState<T>;
  cartItems: EntityState<U>;
  order: DaffCartOrderReducerState<V>;
}

export interface DaffCartStateRootSlice<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffStatefulCartItem = DaffStatefulCartItem
> {
  [DAFF_CART_STORE_FEATURE_KEY]: DaffCartReducersState<T, V, U>;
}
