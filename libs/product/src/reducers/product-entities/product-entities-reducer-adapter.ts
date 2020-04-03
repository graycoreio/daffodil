import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { DaffProduct } from '../../models/product';

/**
 * Product Adapter for changing/overwriting entity state.
 */
export function daffProductEntitiesAdapter<T extends DaffProduct>(): EntityAdapter<T> {
	return createEntityAdapter<T>();
}
