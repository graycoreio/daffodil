import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffCustomer } from '@daffodil/customer';

import {
  DaffCustomerStateRootSlice,
  DaffCustomerReducersState,
  DAFF_CUSTOMER_STORE_FEATURE_KEY,
} from '../reducers/public_api';

/**
 * Selector for the customer feature state.
 */
export interface DaffCustomerFeatureSelector<T extends DaffCustomer = DaffCustomer> {
  selectCustomerFeatureState: MemoizedSelector<DaffCustomerStateRootSlice<T>, DaffCustomerReducersState<T>>;
}

export const getDaffCustomerReducersStateSelector = (() => {
  let cache;
  return <T extends DaffCustomer = DaffCustomer>(): DaffCustomerFeatureSelector<T> =>
    cache = cache || {
      selectCustomerFeatureState: createFeatureSelector<DaffCustomerReducersState<T>>(DAFF_CUSTOMER_STORE_FEATURE_KEY),
    };
})();
