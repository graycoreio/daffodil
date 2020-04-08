import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { DaffProduct } from '../../models/product';

/**
 * Product Adapter for changing/overwriting entity state.
 */
export const daffProductEntitiesAdapter = (() => {
	let cache;
  return <T extends DaffProduct>(): EntityAdapter<T> =>
    cache = cache || createEntityAdapter<T>();
})();