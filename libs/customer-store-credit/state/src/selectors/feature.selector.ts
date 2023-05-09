import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';

import {
  DaffCustomerStoreCreditStateRootSlice,
  DaffCustomerStoreCreditReducersState,
  DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY,
} from '../reducers/public_api';

/**
 * Selector for the customer store credit feature state.
 */
export interface DaffCustomerStoreCreditFeatureSelector<
  TStoreCredit extends DaffCustomerStoreCredit = DaffCustomerStoreCredit
> {
  selectCustomerStoreCreditFeatureState: MemoizedSelector<DaffCustomerStoreCreditStateRootSlice<TStoreCredit>, DaffCustomerStoreCreditReducersState<TStoreCredit>>;
}

export const getDaffCustomerStoreCreditReducersStateSelector = (() => {
  let cache;
  return <TStoreCredit extends DaffCustomerStoreCredit = DaffCustomerStoreCredit>(): DaffCustomerStoreCreditFeatureSelector<TStoreCredit> =>
    cache = cache || {
      selectCustomerStoreCreditFeatureState: createFeatureSelector<DaffCustomerStoreCreditReducersState<TStoreCredit>>(DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY),
    };
})();
