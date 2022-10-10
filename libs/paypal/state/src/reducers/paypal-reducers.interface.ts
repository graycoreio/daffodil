import { DaffPaypalExpressReducerState } from './express/public_api';
import { DAFF_PAYPAL_STORE_FEATURE_KEY } from './paypal-store-feature-key';
import { DaffPaypalReducerState } from './paypal/paypal-reducer.interface';

export interface DaffPaypalReducersState {
  paypal: DaffPaypalReducerState;
  express: DaffPaypalExpressReducerState;
}

export interface DaffPaypalStateRootSlice {
  [DAFF_PAYPAL_STORE_FEATURE_KEY]: DaffPaypalReducersState;
}
