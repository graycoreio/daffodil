import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';
import { DaffProduct } from '../models/product';

export interface DaffProductFeatureMemoizedSelector<T extends DaffProduct = DaffProduct> {
	selectProductState: MemoizedSelector<object, DaffProductReducersState<T>>;
}

export const getDaffProductFeatureSelector = (() => {
	let cache;
	return <T extends DaffProduct>(): DaffProductFeatureMemoizedSelector<T> => cache = cache 
		? cache 
		: { selectProductState: createFeatureSelector<DaffProductReducersState<T>>('product') };
})();
