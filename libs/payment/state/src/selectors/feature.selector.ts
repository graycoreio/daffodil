import {
  createFeatureSelector,
  MemoizedSelector,
  defaultMemoize,
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

export const getDaffPaymentReducersStateSelector: () => DaffPaymentFeatureSelector = defaultMemoize(() => ({
  selectPaymentFeatureState: createFeatureSelector<DaffPaymentReducersState>(DAFF_PAYMENT_STORE_FEATURE_KEY),
})).memoized;
