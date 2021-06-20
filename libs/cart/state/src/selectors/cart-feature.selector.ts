import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffCart,
  DaffCartOrderResult,
} from '@daffodil/cart';

import { DaffStatefulCartItem } from '../models/stateful-cart-item';
import {
  DaffCartStateRootSlice,
  DaffCartReducersState,
  DAFF_CART_STORE_FEATURE_KEY,
} from '../reducers/public_api';

export interface DaffCartFeatureMemoizedSelectors<
  T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
	U extends DaffStatefulCartItem = DaffStatefulCartItem
> {
	selectCartFeatureState: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, DaffCartReducersState<T, V, U>>;
}

export const getDaffCartFeatureSelector = (() => {
  let cache;
  return <
    T extends DaffCart = DaffCart,
		V extends DaffCartOrderResult = DaffCartOrderResult,
		U extends DaffStatefulCartItem = DaffStatefulCartItem
  >(): DaffCartFeatureMemoizedSelectors<T, V, U> => cache = cache
    ? cache
    : {
      selectCartFeatureState:
        createFeatureSelector<DaffCartStateRootSlice<T, V, U>, DaffCartReducersState<T, V, U>>(DAFF_CART_STORE_FEATURE_KEY),
    };
})();
