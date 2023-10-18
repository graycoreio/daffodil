import {
  Dictionary,
  EntityState,
} from '@ngrx/entity';

import {
  DaffCartItemInput,
  DaffCart,
} from '@daffodil/cart';

import { daffCartItemEntitiesAdapter } from './cart-item-entities-reducer-adapter';
import {
  DaffCartItemActionTypes,
  DaffCartActionTypes,
  DaffCartActions,
  DaffCartItemActions,
  DaffCartOrderActionTypes,
} from '../../actions/public_api';
import {
  DaffCartItemStateEnum,
  DaffStatefulCartItem,
} from '../../models/stateful-cart-item';

/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 *
 * @param state current State of the redux store
 * @param action CartItemGrid, BestSellers, or CartItem actions
 * @returns CartItem entities state
 */
export function daffCartItemEntitiesReducer<
  T extends DaffStatefulCartItem = DaffStatefulCartItem,
  U extends DaffCartItemInput = DaffCartItemInput,
  V extends DaffCart = DaffCart,
>(
  state = daffCartItemEntitiesAdapter<T>().getInitialState(),
  action: DaffCartItemActions<T, U, V> | DaffCartActions<V>): EntityState<T> {
  const adapter = daffCartItemEntitiesAdapter<T>();
  switch (action.type) {
    case DaffCartItemActionTypes.CartItemListSuccessAction:
      return adapter.setAll(action.payload.map(item => ({
        ...item,
        daffState: getDaffState(state.entities[item.id]) || DaffCartItemStateEnum.Default,
        daffErrors: [],
      })), state);
    case DaffCartItemActionTypes.CartItemLoadSuccessAction:
      return adapter.upsertOne({
        ...action.payload,
        daffState: getDaffState(state.entities[action.payload.id]) || DaffCartItemStateEnum.Default,
        daffErrors: [],
      }, state);
    case DaffCartItemActionTypes.CartItemAddSuccessAction:
      return adapter.setAll(
        updateAddedCartItemState<T>(state.entities, <T[]>action.payload.items),
        state,
      );
    case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
      return adapter.setAll(
        updateMutatedCartItemState<T>(<T[]>action.payload.items, state.entities, action.itemId),
        state,
      );
    case DaffCartItemActionTypes.CartItemDeleteFailureAction:
    case DaffCartItemActionTypes.CartItemLoadFailureAction:
    case DaffCartItemActionTypes.CartItemUpdateFailureAction:
      return adapter.upsertOne({
        ...state.entities[action.itemId],
        daffState: DaffCartItemStateEnum.Error,
        daffErrors: state.entities[action.itemId]?.daffErrors?.concat(action.payload) || [action.payload],
      }, state);
    case DaffCartItemActionTypes.CartItemDeleteSuccessAction:
    case DaffCartItemActionTypes.CartItemDeleteOutOfStockSuccessAction:
    case DaffCartActionTypes.CartLoadSuccessAction:
    case DaffCartActionTypes.ResolveCartSuccessAction:
    case DaffCartActionTypes.CartLoadPartialSuccessAction:
    case DaffCartActionTypes.ResolveCartPartialSuccessAction:
    case DaffCartActionTypes.CartClearSuccessAction:
      return adapter.setAll(<T[]><unknown>action.payload.items.map(item => ({
        ...item,
        daffState: getDaffState(state.entities[item.id]) || DaffCartItemStateEnum.Default,
      })), state);
    case DaffCartItemActionTypes.CartItemStateResetAction:
      return adapter.setAll(Object.keys(state.entities).map(key => ({
        ...state.entities[key],
        daffState: DaffCartItemStateEnum.Default,
      })), state);
    case DaffCartItemActionTypes.CartItemUpdateAction:
    case DaffCartItemActionTypes.CartItemDeleteAction:
      return adapter.upsertOne({
        ...state.entities[action.itemId],
        daffState: DaffCartItemStateEnum.Mutating,
      }, state);
    case DaffCartActionTypes.CartCreateSuccessAction:
      return adapter.removeAll(state);
    default:
      return state;
  }
}

function getDaffState<T extends DaffStatefulCartItem>(item: T): DaffCartItemStateEnum {
  return item?.daffState;
}

function updateAddedCartItemState<T extends DaffStatefulCartItem>(oldCartItems: Dictionary<T>, newCartItems: T[]): T[] {
  return newCartItems.map(newItem => {
    const oldItem = oldCartItems[newItem.id];
    switch(true) {
      case !oldItem:
        return { ...newItem, daffState: DaffCartItemStateEnum.New, daffErrors: []};
      case oldItem?.qty !== newItem.qty:
        return { ...newItem, daffState: DaffCartItemStateEnum.Updated, daffErrors: []};
      default:
        return newItem;
    }
  });
}

function updateMutatedCartItemState<T extends DaffStatefulCartItem>(responseItems: T[], stateItems: Dictionary<T>, itemId: T['id']): T[] {
  return responseItems.map(item => item.id === itemId ?
    { ...item, daffState: DaffCartItemStateEnum.Updated, daffErrors: []} :
    { ...item, daffState: getDaffState(stateItems[item.id]) || DaffCartItemStateEnum.Default });
}
