import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';

import { DaffCustomerStoreCreditReducerState } from './store-credit/public_api';
import { DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY } from './store-feature-key';

/**
 * The feature state for customer store credit.
 */
export interface DaffCustomerStoreCreditReducersState<
  TStoreCredit extends DaffCustomerStoreCredit = DaffCustomerStoreCredit,
> {
  storeCredit: DaffCustomerStoreCreditReducerState<TStoreCredit>;
}

/**
 * The footprint of customer store credit feature state in the root application state.
 */
export interface DaffCustomerStoreCreditStateRootSlice<
  TStoreCredit extends DaffCustomerStoreCredit = DaffCustomerStoreCredit,
> {
  [DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY]: DaffCustomerStoreCreditReducersState<TStoreCredit>;
}
