import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffPaymentStateRootSlice,
  DaffPaymentReducersState,
  DAFF_PAYMENT_STORE_FEATURE_KEY,
} from '../reducers/public_api';

/**
 * Selector for the payment feature state.
 */
export interface DaffPaymentFeatureSelector {
  selectPaymentFeatureState: MemoizedSelector<DaffPaymentStateRootSlice, DaffPaymentReducersState>;
}

export const getDaffPaymentReducersStateSelector = (() => {
  let cache;
  return (): DaffPaymentFeatureSelector =>
    cache = cache || {
      selectPaymentFeatureState: createFeatureSelector<DaffPaymentReducersState>(DAFF_PAYMENT_STORE_FEATURE_KEY),
    };
})();
