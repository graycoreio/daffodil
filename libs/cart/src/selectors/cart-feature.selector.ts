import {
  createFeatureSelector,
  MemoizedSelector
} from '@ngrx/store';

import { DaffCartReducersState } from '../reducers/public_api';
import { DaffCart } from '../models/cart';
import { DaffCartOrderResult } from '../models/cart-order-result';

export interface DaffCartFeatureMemoizedSelectors<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult
> {
	selectCartFeatureState: MemoizedSelector<object, DaffCartReducersState<T, V>>;
}

export const getDaffCartFeatureSelector = (() => {
	let cache;
	return <
    T extends DaffCart = DaffCart,
    V extends DaffCartOrderResult = DaffCartOrderResult
  >(): DaffCartFeatureMemoizedSelectors<T, V> => cache = cache
		? cache
		: { selectCartFeatureState: createFeatureSelector<DaffCartReducersState<T, V>>('cart') }
})();
