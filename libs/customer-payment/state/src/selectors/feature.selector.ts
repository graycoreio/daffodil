import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffCustomerPayment } from '@daffodil/customer-payment';

import {
  DaffCustomerPaymentStateRootSlice,
  DaffCustomerPaymentReducersState,
  DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY,
} from '../reducers/public_api';

/**
 * Selector for the customer payment feature state.
 */
export interface DaffCustomerPaymentFeatureSelector<
  TPayment extends DaffCustomerPayment = DaffCustomerPayment
> {
  selectCustomerPaymentFeatureState: MemoizedSelector<DaffCustomerPaymentStateRootSlice<TPayment>, DaffCustomerPaymentReducersState<TPayment>>;
}

export const getDaffCustomerPaymentReducersStateSelector = (() => {
  let cache;
  return <TPayment extends DaffCustomerPayment = DaffCustomerPayment>(): DaffCustomerPaymentFeatureSelector<TPayment> =>
    cache = cache || {
      selectCustomerPaymentFeatureState: createFeatureSelector<DaffCustomerPaymentReducersState<TPayment>>(DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY),
    };
})();
