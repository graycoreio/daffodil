import {
  createFeatureSelector,
  MemoizedSelector,
  defaultMemoize,
} from '@ngrx/store';

import {
  DaffCheckoutStateRootSlice,
  DaffCheckoutReducersState,
  DAFF_CHECKOUT_STORE_FEATURE_KEY,
} from '../reducers/public_api';

export interface DaffCheckoutFeatureMemoizedSelectors {
  selectCheckoutFeatureState: MemoizedSelector<DaffCheckoutStateRootSlice, DaffCheckoutReducersState>;
}

export const getDaffCheckoutFeatureSelector: () => DaffCheckoutFeatureMemoizedSelectors= defaultMemoize(() => ({
  selectCheckoutFeatureState:
    createFeatureSelector<DaffCheckoutReducersState>(DAFF_CHECKOUT_STORE_FEATURE_KEY),
})).memoized;
