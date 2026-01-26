import {
  createFeatureSelector,
  MemoizedSelector,
  defaultMemoize,
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

export const getDaffOrderReducersStateSelector: <T extends DaffOrder = DaffOrder>() => DaffOrderFeatureSelector<T> = defaultMemoize(<T extends DaffOrder = DaffOrder>() => ({
  selectOrderFeatureState: createFeatureSelector<DaffOrderReducersState<T>>(DAFF_ORDER_STORE_FEATURE_KEY),
})).memoized;
