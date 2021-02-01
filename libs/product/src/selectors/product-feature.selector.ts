import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffProduct } from '../models/product';
import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';

export interface DaffProductFeatureMemoizedSelector<T extends DaffProduct = DaffProduct> {
	selectProductState: MemoizedSelector<Record<string, any>, DaffProductReducersState<T>>;
}

export const getDaffProductFeatureSelector = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffProductFeatureMemoizedSelector<T> => cache = cache
    ? cache
    : { selectProductState: createFeatureSelector<DaffProductReducersState<T>>('product') };
})();
