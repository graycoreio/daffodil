import { DaffCart, DaffCartOrderResult } from '@daffodil/cart';
import { DaffCartFeatureMemoizedSelectors } from './cart-feature.selector';
import { DaffCartOrderMemoizedSelectors } from './cart-order/cart-order.selector';
import { DaffCartStateMemoizedSelectors } from './cart/cart.selector';
import { DaffCartItemEntitiesMemoizedSelectors } from './cart-item-entities/cart-item-entities.selectors';
import { DaffStatefulCartItem } from '../models/stateful-cart-item';
export interface DaffCartMemoizedSelectors<T extends DaffCart = DaffCart, V extends DaffCartOrderResult = DaffCartOrderResult, U extends DaffStatefulCartItem = DaffStatefulCartItem> extends DaffCartFeatureMemoizedSelectors<T, V>, DaffCartOrderMemoizedSelectors<V>, DaffCartStateMemoizedSelectors<T>, DaffCartItemEntitiesMemoizedSelectors<U> {
}
export declare const getDaffCartSelectors: <T extends DaffCart = DaffCart, V extends DaffCartOrderResult = DaffCartOrderResult, U extends DaffStatefulCartItem = DaffStatefulCartItem>() => DaffCartMemoizedSelectors<T, V, U>;
