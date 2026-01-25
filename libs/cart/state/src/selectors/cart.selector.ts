import { defaultMemoize } from '@ngrx/store';

import {
  DaffCart,
  DaffCartOrderResult,
} from '@daffodil/cart';

import {
  DaffCartStateMemoizedSelectors,
  getCartSelectors,
} from './cart/cart.selector';
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

export interface DaffCartMemoizedSelectors<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
> extends DaffCartFeatureMemoizedSelectors<T, V>,
  DaffCartOrderMemoizedSelectors<T, V>,
  DaffCartStateMemoizedSelectors<T>,
  DaffCartItemEntitiesMemoizedSelectors<T, V> {}

const createCartSelectors = <
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
>(): DaffCartMemoizedSelectors<T, V> => ({
  ...getDaffCartFeatureSelector<T, V>(),
  ...getCartOrderSelectors<T, V>(),
  ...getCartSelectors<T, V>(),
  ...getDaffCartItemEntitiesSelectors<T, V>(),
});

export const getDaffCartSelectors: <
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
>() => DaffCartMemoizedSelectors<T, V> = defaultMemoize(<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
>() => createCartSelectors<T, V>()).memoized;
