import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';
import { DaffProduct } from '../models/product';

export interface DaffProductFeatureMemoizedSelectors<T extends DaffProduct> {
	selectProductState: MemoizedSelector<object, DaffProductReducersState<T>>;
}

const createProductFeatureSelectors = <T extends DaffProduct>(): DaffProductFeatureMemoizedSelectors<T> => {
	/**
	 * Product Feature State
	 */
	const selectProductState = createFeatureSelector<DaffProductReducersState<T>>('product');

	return { 
		selectProductState
	}
}

const memoizeDaffProductFeatureSelectors = () => {
	let cache;
	return <T extends DaffProduct>(): DaffProductFeatureMemoizedSelectors<T> => cache = cache 
		? cache 
		: createProductFeatureSelectors<T>();
}

export const getDaffProductFeatureSelectors = memoizeDaffProductFeatureSelectors();
