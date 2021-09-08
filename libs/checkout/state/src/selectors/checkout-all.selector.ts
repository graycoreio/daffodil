import { DaffOrder } from '@daffodil/order';

import {
  DaffCheckoutPlacedOrderSelectors,
  getCheckoutPlacedOrderSelectors,
} from './placed-order.selector';

export type DaffCheckoutSelectors<T extends DaffOrder = DaffOrder> = DaffCheckoutPlacedOrderSelectors<T>;

/**
 * Gets all of `@daffodil/order/state` selectors.
 */
export const getDaffCheckoutSelectors = (() => {
  let cache;
  return <T extends DaffOrder = DaffOrder>(): DaffCheckoutSelectors<T> =>
    cache = cache || {
      ...getCheckoutPlacedOrderSelectors<T>(),
    };
})();
