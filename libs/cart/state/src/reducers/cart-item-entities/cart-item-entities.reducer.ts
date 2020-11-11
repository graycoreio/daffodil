import { EntityState } from '@ngrx/entity';

import { DaffCartItem, DaffCartItemInput, DaffCart } from '@daffodil/cart';

import { daffCartItemEntitiesAdapter } from './cart-item-entities-reducer-adapter';
import { DaffCartItemActionTypes, DaffCartActionTypes, DaffCartActions } from '../../actions/public_api';
import { DaffCartItemActions } from '../../actions/public_api';

/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 *
 * @param state current State of the redux store
 * @param action CartItemGrid, BestSellers, or CartItem actions
 * @returns CartItem entities state
 */
export function daffCartItemEntitiesReducer<
	T extends DaffCartItem = DaffCartItem,
	U extends DaffCartItemInput = DaffCartItemInput,
	V extends DaffCart = DaffCart
>(
  state = daffCartItemEntitiesAdapter<T>().getInitialState(),
  action: DaffCartItemActions<T, U, V> | DaffCartActions<V>): EntityState<T> {
	const adapter = daffCartItemEntitiesAdapter<T>();
  switch (action.type) {
    case DaffCartItemActionTypes.CartItemListSuccessAction:
			return adapter.addAll(action.payload, state);
		case DaffCartItemActionTypes.CartItemLoadSuccessAction:
			return adapter.upsertOne(action.payload, state);
		case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
		case DaffCartItemActionTypes.CartItemDeleteSuccessAction:
		case DaffCartItemActionTypes.CartItemAddSuccessAction:
		case DaffCartActionTypes.CartLoadSuccessAction:
		case DaffCartActionTypes.CartClearSuccessAction:
			return adapter.addAll(<T[]><unknown>action.payload.items, state);
    default:
      return state;
  }
}
