import {
  createFeatureSelector,
  MemoizedSelector
} from '@ngrx/store';

import { DaffCart, DaffCartOrderResult } from '@daffodil/cart';

import { DaffCartReducersState } from '../reducers/public_api';
import { DaffStatefulCartItem } from '../models/stateful-cart-item';

export interface DaffCartFeatureMemoizedSelectors<
  T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
	U extends DaffStatefulCartItem = DaffStatefulCartItem
> {
	selectCartFeatureState: MemoizedSelector<object, DaffCartReducersState<T, V, U>>;
}

export const getDaffCartFeatureSelector = (() => {
	let cache;
	return <
    T extends DaffCart = DaffCart,
		V extends DaffCartOrderResult = DaffCartOrderResult,
		U extends DaffStatefulCartItem = DaffStatefulCartItem
  >(): DaffCartFeatureMemoizedSelectors<T, V, U> => cache = cache
		? cache
		: { selectCartFeatureState: createFeatureSelector<DaffCartReducersState<T, V, U>>('cart') }
})();
