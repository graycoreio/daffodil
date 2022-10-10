import { DaffPaymentReducerState } from './payment/public_api';
import { DAFF_PAYMENT_STORE_FEATURE_KEY } from './store-feature-key';

/**
 * The feature state for payment.
 */
export interface DaffPaymentReducersState {
  payment: DaffPaymentReducerState;
}

/**
 * The footprint of payment feature state in the root application state.
 */
export interface DaffPaymentStateRootSlice {
  [DAFF_PAYMENT_STORE_FEATURE_KEY]: DaffPaymentReducersState;
}
