import { DaffOrder } from '@daffodil/order';

import {
  DaffOrderEntitySelectors,
  getDaffOrderEntitySelectors,
} from './order-entities.selector';
import {
  DaffOrderFeatureSelector,
  getDaffOrderReducersStateSelector,
} from './order-feature.selector';
import {
  DaffOrderSelectors,
  getOrderSelectors,
} from './order.selector';

export interface DaffOrderAllSelectors<T extends DaffOrder = DaffOrder> extends
  DaffOrderEntitySelectors<T>,
  DaffOrderSelectors<T>,
  DaffOrderFeatureSelector<T> {}

export const getDaffOrderSelectors = (() => {
  let cache;
  return <T extends DaffOrder = DaffOrder>(): DaffOrderAllSelectors<T> =>
    cache = cache || {
      ...getOrderSelectors<T>(),
      ...getDaffOrderEntitySelectors<T>(),
      ...getDaffOrderReducersStateSelector<T>(),
    };
})();
