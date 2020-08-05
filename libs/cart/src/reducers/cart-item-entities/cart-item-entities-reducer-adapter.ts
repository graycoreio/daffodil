import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { DaffCartItem } from '../../models/cart-item';

/**
 * Cart Item Entities Adapter for changing/overwriting entity state.
 */
export const daffCartItemEntitiesAdapter = (() => {
	let cache;
  return <T extends DaffCartItem>(): EntityAdapter<T> =>
    cache = cache || createEntityAdapter<T>();
})();
