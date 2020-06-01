import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffOrderReducersState, DAFF_ORDER_STORE_FEATURE_KEY } from '../reducers/public_api';
import { DaffOrder } from '../models/order';

export interface DaffOrderFeatureSelector<T extends DaffOrder> {
  selectOrderFeatureState: MemoizedSelector<object, DaffOrderReducersState<T>>
}

export const getDaffOrderReducersStateSelector = (() => {
  let cache;
  return <T extends DaffOrder>(): DaffOrderFeatureSelector<T> =>
    cache = cache || {
      selectOrderFeatureState: createFeatureSelector<DaffOrderReducersState<T>>(DAFF_ORDER_STORE_FEATURE_KEY)
    }
})();
