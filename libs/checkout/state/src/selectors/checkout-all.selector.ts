import { DaffOrder } from '@daffodil/order';

import {
  DaffCheckoutPlacedOrderSelectors,
  getCheckoutPlacedOrderSelectors,
} from './placed-order.selector';

export type DaffCheckoutAllSelectors<T extends DaffOrder = DaffOrder> = DaffCheckoutPlacedOrderSelectors<T>;

export const getDaffCheckoutSelectors = (() => {
  let cache;
  return <T extends DaffOrder = DaffOrder>(): DaffCheckoutAllSelectors<T> =>
    cache = cache || {
      ...getCheckoutPlacedOrderSelectors<T>(),
    };
})();
