import { DaffOrder } from '../models/public_api';
import { DaffOrderEntitySelectors, getDaffOrderEntitySelectors } from './order-entities.selector';
import { DaffOrderSelectors, getOrderSelectors } from './order.selector';
import { DaffOrderFeatureSelector, getDaffOrderReducersStateSelector } from './order-feature.selector';

export interface DaffOrderAllSelectors<T extends DaffOrder> extends
  DaffOrderEntitySelectors<T>,
  DaffOrderSelectors,
  DaffOrderFeatureSelector<T> {}

export const getDaffOrderSelectors = (() => {
  let cache;
  return <T extends DaffOrder>(): DaffOrderAllSelectors<T> =>
    cache = cache || {
      ...getOrderSelectors<T>(),
      ...getDaffOrderEntitySelectors<T>(),
      ...getDaffOrderReducersStateSelector<T>()
    }
})();
