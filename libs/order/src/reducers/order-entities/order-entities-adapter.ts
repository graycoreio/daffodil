import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { DaffOrder } from '../../models/order';

/**
 * Order Adapter for changing/overwriting entity state.
 */
export const daffGetOrderAdapter = (() => {
  let cache;
  return <T extends DaffOrder = DaffOrder>(): EntityAdapter<T> =>
    cache = cache || createEntityAdapter<T>();
})();
