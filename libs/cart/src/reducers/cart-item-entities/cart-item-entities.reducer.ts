import { EntityState } from '@ngrx/entity';

import { daffCartItemEntitiesAdapter } from './cart-item-entities-reducer-adapter';
import { DaffCartItem } from '../../models/cart-item';
import { DaffCartItemActionTypes } from '../../actions/public_api';
import { DaffCartItemActions } from '../../actions/public_api';
import { DaffCart } from '../../models/cart';
import { DaffCartItemInput } from '../../models/cart-item-input';

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
  action: DaffCartItemActions<T, U, V>): EntityState<T> {
	const adapter = daffCartItemEntitiesAdapter<T>();
  switch (action.type) {
    case DaffCartItemActionTypes.CartItemListSuccessAction:
			return adapter.addAll(action.payload, state);
		case DaffCartItemActionTypes.CartItemLoadSuccessAction:
			return adapter.upsertOne(action.payload, state);
		case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
		case DaffCartItemActionTypes.CartItemAddSuccessAction:
		case DaffCartItemActionTypes.CartItemDeleteSuccessAction:
			return adapter.addAll(<T[]><unknown>action.payload.items, state);
    default:
      return state;
  }
}
