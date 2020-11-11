import { DaffCart, DaffCartOrderResult, DaffCartItem } from '@daffodil/cart';

import { DaffCartFeatureMemoizedSelectors, getDaffCartFeatureSelector } from './cart-feature.selector';
import { DaffCartOrderMemoizedSelectors, getCartOrderSelectors } from './cart-order/cart-order.selector';
import { DaffCartStateMemoizedSelectors, getCartSelectors } from './cart/cart.selector';
import { getDaffCartItemEntitiesSelectors, DaffCartItemEntitiesMemoizedSelectors } from './cart-item-entities/cart-item-entities.selectors';

export interface DaffCartMemoizedSelectors<
  T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
	U extends DaffCartItem = DaffCartItem
> extends DaffCartFeatureMemoizedSelectors<T, V>,
	DaffCartOrderMemoizedSelectors<V>,
	DaffCartStateMemoizedSelectors<T>,
	DaffCartItemEntitiesMemoizedSelectors<U> {}

const createCartSelectors = <
  T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
	U extends DaffCartItem = DaffCartItem
>(): DaffCartMemoizedSelectors<T> => {

	return {
		...getDaffCartFeatureSelector<T, V, U>(),
		...getCartOrderSelectors<T, V, U>(),
		...getCartSelectors<T, V, U>(),
		...getDaffCartItemEntitiesSelectors<T, V, U>()
	}
}

export const getDaffCartSelectors = (() => {
	let cache;
	return <
    T extends DaffCart = DaffCart,
		V extends DaffCartOrderResult = DaffCartOrderResult,
		U extends DaffCartItem = DaffCartItem
  >(): DaffCartMemoizedSelectors<T, V, U> => cache = cache
		? cache
		: createCartSelectors<T, V, U>();
})();
