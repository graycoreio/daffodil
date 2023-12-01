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

    case DaffCartItemActionTypes.CartItemDeleteFailureAction:
    case DaffCartItemActionTypes.CartItemLoadFailureAction:
    case DaffCartItemActionTypes.CartItemUpdateFailureAction:
      return adapter.upsertOne({
        ...state.entities[action.itemId],
        daffState: DaffCartItemStateEnum.Error,
        daffErrors: state.entities[action.itemId]?.daffErrors?.concat(action.payload) || action.payload,
      }, state);

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


