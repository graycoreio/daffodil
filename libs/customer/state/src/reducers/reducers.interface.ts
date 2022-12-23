import { DaffCustomer } from '@daffodil/customer';

import { DaffCustomerReducerState } from './customer/public_api';
import { DAFF_CUSTOMER_STORE_FEATURE_KEY } from './store-feature-key';

/**
 * The feature state for customer.
 */
export interface DaffCustomerReducersState<T extends DaffCustomer = DaffCustomer> {
  customer: DaffCustomerReducerState<T>;
}

/**
 * The footprint of customer feature state in the root application state.
 */
export interface DaffCustomerStateRootSlice<T extends DaffCustomer = DaffCustomer> {
  [DAFF_CUSTOMER_STORE_FEATURE_KEY]: DaffCustomerReducersState<T>;
}
