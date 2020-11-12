import {
  createFeatureSelector,
  MemoizedSelector
} from '@ngrx/store';

import { DaffCart, DaffCartOrderResult, DaffCartItem } from '@daffodil/cart';

import { DaffCartReducersState } from '../reducers/public_api';

export interface DaffCartFeatureMemoizedSelectors<
  T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
	U extends DaffCartItem = DaffCartItem
> {
	selectCartFeatureState: MemoizedSelector<object, DaffCartReducersState<T, V, U>>;
}

export const getDaffCartFeatureSelector = (() => {
	let cache;
	return <
    T extends DaffCart = DaffCart,
		V extends DaffCartOrderResult = DaffCartOrderResult,
		U extends DaffCartItem = DaffCartItem
  >(): DaffCartFeatureMemoizedSelectors<T, V, U> => cache = cache
		? cache
		: { selectCartFeatureState: createFeatureSelector<DaffCartReducersState<T, V, U>>('cart') }
})();
