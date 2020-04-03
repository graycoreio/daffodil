import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';
import { DaffProduct } from '../models/product';

/**
 * Product Feature State
 */
export function selectProductState<T extends DaffProduct>():
	MemoizedSelector<object, DaffProductReducersState<T>> {
	return createFeatureSelector<DaffProductReducersState<T>>('product');
}
