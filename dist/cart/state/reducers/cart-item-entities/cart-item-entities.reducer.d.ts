import { EntityState } from '@ngrx/entity';
import { DaffCartItemInput, DaffCart } from '@daffodil/cart';
import { DaffCartActions, DaffCartItemActions } from '../../actions/public_api';
import { DaffStatefulCartItem } from '../../models/stateful-cart-item';
/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 *
 * @param state current State of the redux store
 * @param action CartItemGrid, BestSellers, or CartItem actions
 * @returns CartItem entities state
 */
export declare function daffCartItemEntitiesReducer<T extends DaffStatefulCartItem = DaffStatefulCartItem, U extends DaffCartItemInput = DaffCartItemInput, V extends DaffCart = DaffCart>(state: EntityState<T>, action: DaffCartItemActions<T, U, V> | DaffCartActions<V>): EntityState<T>;
