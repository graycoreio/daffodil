import { DaffPaypalTokenResponse } from '@daffodil/paypal';

import { DAFF_PAYPAL_STORE_FEATURE_KEY } from './paypal-store-feature-key';
import { DaffPaypalReducerState } from './paypal/paypal-reducer.interface';

export interface DaffPaypalReducersState<T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse> {
  paypal: DaffPaypalReducerState<T>;
}

export interface DaffPaypalStateRootSlice<T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse> {
  [DAFF_PAYPAL_STORE_FEATURE_KEY]: DaffPaypalReducersState<T>;
}
