import { DaffCartStateRootSlice } from '@daffodil/cart/state';
import { DaffOrder } from '@daffodil/order';
import { DaffOrderStateRootSlice } from '@daffodil/order/state';

/**
 * The footprint of `@daffodil/checkout/state` in root.
 */
export interface DaffCheckoutStateRootSlice<T extends DaffOrder = DaffOrder> extends DaffCartStateRootSlice, DaffOrderStateRootSlice<T> {}
