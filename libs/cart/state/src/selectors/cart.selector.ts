import {
  DaffCart,
  DaffCartOrderResult,
} from '@daffodil/cart';

import { DaffStatefulCartItem } from '../models/stateful-cart-item';
import {
  DaffCartFeatureMemoizedSelectors,
  getDaffCartFeatureSelector,
} from './cart-feature.selector';
import {
  getDaffCartItemEntitiesSelectors,
  DaffCartItemEntitiesMemoizedSelectors,
} from './cart-item-entities/cart-item-entities.selectors';
import {
  DaffCartOrderMemoizedSelectors,
  getCartOrderSelectors,
} from './cart-order/cart-order.selector';
import {
  DaffCartStateMemoizedSelectors,
  getCartSelectors,
} from './cart/cart.selector';

export interface DaffCartMemoizedSelectors<
  T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
	U extends DaffStatefulCartItem = DaffStatefulCartItem
> extends DaffCartFeatureMemoizedSelectors<T, V>,
	DaffCartOrderMemoizedSelectors<T, V, U>,
	DaffCartStateMemoizedSelectors<T>,
	DaffCartItemEntitiesMemoizedSelectors<T, V, U> {}

const createCartSelectors = <
  T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
	U extends DaffStatefulCartItem = DaffStatefulCartItem
>(): DaffCartMemoizedSelectors<T, V, U> => ({
    ...getDaffCartFeatureSelector<T, V, U>(),
    ...getCartOrderSelectors<T, V, U>(),
    ...getCartSelectors<T, V, U>(),
    ...getDaffCartItemEntitiesSelectors<T, V, U>(),
  });

export const getDaffCartSelectors = (() => {
  let cache;
  return <
    T extends DaffCart = DaffCart,
		V extends DaffCartOrderResult = DaffCartOrderResult,
		U extends DaffStatefulCartItem = DaffStatefulCartItem
  >(): DaffCartMemoizedSelectors<T, V, U> => cache = cache
    ? cache
    : createCartSelectors<T, V, U>();
})();
