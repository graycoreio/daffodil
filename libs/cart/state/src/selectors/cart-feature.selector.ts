import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffCart,
  DaffCartOrderResult,
} from '@daffodil/cart';

import {
  DaffCartStateRootSlice,
  DaffCartReducersState,
  DAFF_CART_STORE_FEATURE_KEY,
} from '../reducers/public_api';

export interface DaffCartFeatureMemoizedSelectors<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
> {
  selectCartFeatureState: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffCartReducersState<T, V>>;
}

export const getDaffCartFeatureSelector = (() => {
  let cache;
  return <
    T extends DaffCart = DaffCart,
    V extends DaffCartOrderResult = DaffCartOrderResult,
  >(): DaffCartFeatureMemoizedSelectors<T, V> => cache = cache
    ? cache
    : {
      selectCartFeatureState:
        createFeatureSelector<DaffCartStateRootSlice<T, V>, DaffCartReducersState<T, V>>(DAFF_CART_STORE_FEATURE_KEY),
    };
})();
