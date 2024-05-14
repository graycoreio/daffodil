import {
  DaffCart,
  DaffCartOrderResult,
} from '@daffodil/cart';
import { DaffOperationEntityState } from '@daffodil/core/state';

import { DaffCartOrderReducerState } from './cart-order/cart-order-state.interface';
import { DaffCartReducerState } from './cart-state.interface';
import { DAFF_CART_STORE_FEATURE_KEY } from './cart-store-feature-key';

export interface DaffCartReducersState<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
> {
  cart: DaffCartReducerState<T>;
  cartItems: DaffOperationEntityState<T['items'][number]>;
  order: DaffCartOrderReducerState<V>;
}

export interface DaffCartStateRootSlice<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
> {
  [DAFF_CART_STORE_FEATURE_KEY]: DaffCartReducersState<T, V>;
}
