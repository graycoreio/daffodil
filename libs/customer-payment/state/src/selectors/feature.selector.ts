import {
  createFeatureSelector,
  MemoizedSelector,
  defaultMemoize,
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

export const getDaffCustomerPaymentReducersStateSelector: <TPayment extends DaffCustomerPayment = DaffCustomerPayment>() => DaffCustomerPaymentFeatureSelector<TPayment> = defaultMemoize(<TPayment extends DaffCustomerPayment = DaffCustomerPayment>() => ({
  selectCustomerPaymentFeatureState: createFeatureSelector<DaffCustomerPaymentReducersState<TPayment>>(DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY),
})).memoized;
