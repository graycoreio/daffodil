import { Dictionary } from '@ngrx/entity';
import { ActionReducer } from '@ngrx/store';

import {
  DaffCart,
  DaffCartOrderResult,
} from '@daffodil/cart';

import {
  DaffCartItemActionTypes,
  DaffCartItemActions,
} from '../../actions/public_api';
import {
  DaffCartItemStateEnum,
  DaffStatefulCartItem,
} from '../../models/public_api';
import { DaffCartReducersState } from '../cart-reducers-state.interface';

type Reducer<T extends DaffStatefulCartItem = DaffStatefulCartItem> = ActionReducer<DaffCartReducersState<DaffCart, DaffCartOrderResult, T>, DaffCartItemActions<T>>;

/**
 * A meta reducer for determining and setting the correct `daffState` values on cart items.
 */
export function daffCartSetItemStateMetaReducer<T extends DaffStatefulCartItem = DaffStatefulCartItem>(reducer: Reducer<T>): Reducer<T> {
  return (state, action) => {
    switch (action.type) {
      case DaffCartItemActionTypes.CartItemAddSuccessAction:
        return reducer(
          state,
          {
            ...action,
            payload: {
              ...action.payload,
              items: updateAddedCartItemState<T>(state.cartItems.entities, (<T[]>action.payload.items).map((item) => ({
                ...item,
                daffErrors: [],
              }))),
            },
          },
        );

      case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
        return reducer(
          state,
          {
            ...action,
            payload: {
              ...action.payload,
              items: updateMutatedCartItemState<T>((<T[]>action.payload.items).map((item) => item.id === action.itemId
                ? {
                  ...item,
                  daffErrors: [],
                }
                : item), state.cartItems.entities, action.itemId),
            },
          },
        );

      default:
        return reducer(state, action);
    }
  };
}

function updateAddedCartItemState<T extends DaffStatefulCartItem = DaffStatefulCartItem>(oldCartItems: Dictionary<T>, newCartItems: T[]): T[] {
  return newCartItems.map(newItem => {
    const oldItem = oldCartItems[newItem.id];
    switch (true) {
      case !oldItem:
        return { ...newItem, daffState: DaffCartItemStateEnum.New, daffErrors: []};
      case oldItem?.qty !== newItem.qty:
        return { ...newItem, daffState: DaffCartItemStateEnum.Updated, daffErrors: []};
      default:
        return newItem;
    }
  });
}

function updateMutatedCartItemState<T extends DaffStatefulCartItem = DaffStatefulCartItem>(responseItems: T[], stateItems: Dictionary<T>, itemId: T['id']): T[] {
  return responseItems.map(item => item.id === itemId ?
    { ...item, daffState: DaffCartItemStateEnum.Updated, daffErrors: []} :
    { ...item, daffState: stateItems[item.id]?.daffState || DaffCartItemStateEnum.Default });
}
