import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffOrder } from '@daffodil/order';

import {
  DaffOrderStateRootSlice,
  DaffOrderReducersState,
  DAFF_ORDER_STORE_FEATURE_KEY,
} from '../reducers/public_api';

export interface DaffOrderFeatureSelector<T extends DaffOrder = DaffOrder> {
  selectOrderFeatureState: MemoizedSelector<DaffOrderStateRootSlice<T>, DaffOrderReducersState<T>>;
}

export const getDaffOrderReducersStateSelector = (() => {
  let cache;
  return <T extends DaffOrder = DaffOrder>(): DaffOrderFeatureSelector<T> =>
    cache = cache || {
      selectOrderFeatureState: createFeatureSelector<DaffOrderReducersState<T>>(DAFF_ORDER_STORE_FEATURE_KEY),
    };
})();
