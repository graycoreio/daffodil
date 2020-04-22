import { DaffCart } from '../models/cart';
import { DaffCartOrderResult } from '../models/cart-order-result';
import { DaffCartFeatureMemoizedSelectors, getDaffCartFeatureSelector } from './cart-feature.selector';
import { DaffCartOrderMemoizedSelectors, getCartOrderSelectors } from './cart-order/cart-order.selector';
import { DaffCartStateMemoizedSelectors, getCartSelectors } from './cart/cart.selector';

export interface DaffCartMemoizedSelectors<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult
> extends DaffCartFeatureMemoizedSelectors<T, V>,
	DaffCartOrderMemoizedSelectors<V>,
	DaffCartStateMemoizedSelectors<T> {}

const createCartSelectors = <
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult
>(): DaffCartMemoizedSelectors<T> => {

	return {
		...getDaffCartFeatureSelector<T, V>(),
		...getCartOrderSelectors<T, V>(),
		...getCartSelectors<T>()
	}
}

export const getDaffCartSelectors = (() => {
	let cache;
	return <
    T extends DaffCart = DaffCart,
    V extends DaffCartOrderResult = DaffCartOrderResult
  >(): DaffCartMemoizedSelectors<T, V> => cache = cache
		? cache
		: createCartSelectors<T, V>();
})();
