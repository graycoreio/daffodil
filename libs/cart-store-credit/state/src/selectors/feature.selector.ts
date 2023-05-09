import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffCartStoreCreditStateRootSlice,
  DaffCartStoreCreditReducersState,
  DAFF_CART_STORE_CREDIT_STORE_FEATURE_KEY,
} from '../reducers/public_api';

/**
 * Selector for the cart store credit feature state.
 */
export interface DaffCartStoreCreditFeatureSelector {
  selectCustomerStoreCreditFeatureState: MemoizedSelector<DaffCartStoreCreditStateRootSlice, DaffCartStoreCreditReducersState>;
}

export const getDaffCartStoreCreditReducersStateSelector = (() => {
  let cache;
  return (): DaffCartStoreCreditFeatureSelector =>
    cache = cache || {
      selectCustomerStoreCreditFeatureState: createFeatureSelector<DaffCartStoreCreditReducersState>(DAFF_CART_STORE_CREDIT_STORE_FEATURE_KEY),
    };
})();
