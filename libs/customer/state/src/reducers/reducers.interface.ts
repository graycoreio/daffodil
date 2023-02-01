import { DaffOperationEntityState } from '@daffodil/core/state';
import {
  DaffCustomer,
  DaffCustomerAddress,
} from '@daffodil/customer';

import { DaffCustomerAddressReducerState } from './address/type';
import { DaffCustomerReducerState } from './customer/public_api';
import { DAFF_CUSTOMER_STORE_FEATURE_KEY } from './store-feature-key';

/**
 * The feature state for customer.
 */
export interface DaffCustomerReducersState<
  TCustomer extends DaffCustomer = DaffCustomer,
  TAddress extends DaffCustomerAddress = DaffCustomerAddress,
> {
  customer: DaffCustomerReducerState<TCustomer>;
  address: DaffCustomerAddressReducerState;
  addressEntities: DaffOperationEntityState<TAddress>;
}

/**
 * The footprint of customer feature state in the root application state.
 */
export interface DaffCustomerStateRootSlice<
  TCustomer extends DaffCustomer = DaffCustomer,
  TAddress extends DaffCustomerAddress = DaffCustomerAddress,
> {
  [DAFF_CUSTOMER_STORE_FEATURE_KEY]: DaffCustomerReducersState<TCustomer, TAddress>;
}
