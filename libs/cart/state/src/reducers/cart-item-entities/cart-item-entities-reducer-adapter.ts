import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { DaffStatefulCartItem } from '../../models/stateful-cart-item';

/**
 * Cart Item Entities Adapter for changing/overwriting entity state.
 */
export const daffCartItemEntitiesAdapter = (() => {
	let cache;
  return <T extends DaffStatefulCartItem>(): EntityAdapter<T> =>
    cache = cache || createEntityAdapter<T>({selectId: item => item.item_id});
})();
