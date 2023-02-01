import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffCustomer,
  DaffCustomerAddress,
} from '@daffodil/customer';

import {
  DaffCustomerStateRootSlice,
  DaffCustomerReducersState,
  DAFF_CUSTOMER_STORE_FEATURE_KEY,
} from '../reducers/public_api';

/**
 * Selector for the customer feature state.
 */
export interface DaffCustomerFeatureSelector<
  TCustomer extends DaffCustomer = DaffCustomer,
  TAddress extends DaffCustomerAddress = DaffCustomerAddress
> {
  selectCustomerFeatureState: MemoizedSelector<DaffCustomerStateRootSlice<TCustomer, TAddress>, DaffCustomerReducersState<TCustomer, TAddress>>;
}

export const getDaffCustomerReducersStateSelector = (() => {
  let cache;
  return <TCustomer extends DaffCustomer = DaffCustomer, TAddress extends DaffCustomerAddress = DaffCustomerAddress>(): DaffCustomerFeatureSelector<TCustomer, TAddress> =>
    cache = cache || {
      selectCustomerFeatureState: createFeatureSelector<DaffCustomerReducersState<TCustomer, TAddress>>(DAFF_CUSTOMER_STORE_FEATURE_KEY),
    };
})();
