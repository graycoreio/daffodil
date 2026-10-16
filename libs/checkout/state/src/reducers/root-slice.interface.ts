import { DaffCartStateRootSlice } from '@daffodil/cart/state';
import { DaffOrder } from '@daffodil/order';
import { DaffOrderStateRootSlice } from '@daffodil/order/state';

import { DAFF_CHECKOUT_STORE_FEATURE_KEY } from './feature-key.const';
import { DaffCheckoutReducersState } from './state.interface';

/**
 * The footprint of `@daffodil/checkout/state` in root.
 */
export interface DaffCheckoutStateRootSlice<T extends DaffOrder = DaffOrder> extends DaffCartStateRootSlice, DaffOrderStateRootSlice<T> {
  [DAFF_CHECKOUT_STORE_FEATURE_KEY]: DaffCheckoutReducersState;
}
