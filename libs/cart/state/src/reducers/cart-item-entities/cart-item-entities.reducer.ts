import { Dictionary, EntityState } from '@ngrx/entity';

import { DaffCartItem, DaffCartItemInput, DaffCart, DaffCartItemStateEnum } from '@daffodil/cart';

import { daffCartItemEntitiesAdapter } from './cart-item-entities-reducer-adapter';
import { DaffCartItemActionTypes, DaffCartActionTypes, DaffCartActions, DaffCartItemActions } from '../../actions/public_api';

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
		case DaffCartItemActionTypes.CartItemAddSuccessAction:
			return adapter.addAll(
				updateAddedCartItemState<T>(state.entities, <T[]>action.payload.items), 
				state
			);
		case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
			return adapter.addAll(
				updateMutatedCartItemState<T>(<T[]>action.payload.items, action.itemId), 
				state
			);
		case DaffCartItemActionTypes.CartItemDeleteSuccessAction:
		case DaffCartActionTypes.CartLoadSuccessAction:
		case DaffCartActionTypes.CartClearSuccessAction:
			return adapter.addAll(<T[]><unknown>action.payload.items, state);
		case DaffCartItemActionTypes.CartItemStateResetAction:
			return adapter.addAll(Object.keys(state.entities).map(key => ({
				...state.entities[key],
				state: DaffCartItemStateEnum.Default
			})), state);
		case DaffCartItemActionTypes.CartItemUpdateAction:
		case DaffCartItemActionTypes.CartItemDeleteAction:
			return adapter.upsertOne({
				...state.entities[action.itemId],
				state: DaffCartItemStateEnum.Mutating
			}, state)
    default:
      return state;
  }
}

function updateAddedCartItemState<T extends DaffCartItem>(oldCartItems: Dictionary<T>, newCartItems: T[]): T[] {
	return newCartItems.map(newItem => {
		const oldItem = oldCartItems[newItem.item_id];
		switch(true) {
			case !oldItem:
				return { ...newItem, state: DaffCartItemStateEnum.New };
			//todo: add optional chaining when possible
			case oldItem && oldItem.qty !== newItem.qty:
				return { ...newItem, state: DaffCartItemStateEnum.Updated };
			default:
				return newItem;
		}
	})
}

function updateMutatedCartItemState<T extends DaffCartItem>(cartItems: T[], itemId: T['item_id']): T[] {
	console.log('test');
	return cartItems.map(item => item.item_id === itemId ? 
		{ ...item, state: DaffCartItemStateEnum.Updated} : item)
}
