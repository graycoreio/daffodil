import { defaultMemoize } from '@ngrx/store';

import { DaffOrder } from '@daffodil/order';

import {
  DaffCheckoutPlacedOrderSelectors,
  getCheckoutPlacedOrderSelectors,
} from './placed-order.selector';

export type DaffCheckoutSelectors<T extends DaffOrder = DaffOrder> = DaffCheckoutPlacedOrderSelectors<T>;

/**
 * Gets all of `@daffodil/checkout/state` selectors.
 */
export const getDaffCheckoutSelectors: <T extends DaffOrder = DaffOrder>() => DaffCheckoutSelectors<T> = defaultMemoize(<T extends DaffOrder = DaffOrder>() => ({
  ...getCheckoutPlacedOrderSelectors<T>(),
})).memoized;
