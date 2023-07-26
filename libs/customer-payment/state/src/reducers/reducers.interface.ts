import { DaffOperationEntityState } from '@daffodil/core/state';
import { DaffCustomerPayment } from '@daffodil/customer-payment';

import { DaffCustomerPaymentReducerState } from './payment/public_api';
import { DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY } from './store-feature-key';

/**
 * The feature state for customer.
 */
export interface DaffCustomerPaymentReducersState<
  TPayment extends DaffCustomerPayment = DaffCustomerPayment,
> {
  payment: DaffCustomerPaymentReducerState;
  paymentEntities: DaffOperationEntityState<TPayment>;
}

/**
 * The footprint of customer feature state in the root application state.
 */
export interface DaffCustomerPaymentStateRootSlice<
  TPayment extends DaffCustomerPayment = DaffCustomerPayment,
> {
  [DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY]: DaffCustomerPaymentReducersState<TPayment>;
}
