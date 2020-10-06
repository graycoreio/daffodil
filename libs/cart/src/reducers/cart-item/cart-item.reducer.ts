import { DaffLoadingState } from '@daffodil/core';

import {
  DaffCartItemActionTypes,
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCart } from '../../models/cart';
import { initializeErrorAdder, initializeErrorResetter } from '../errors/error-state-helpers';
import { initializeLoadingSetter } from '../loading/loading-state-helpers';

const addError = initializeErrorAdder(DaffCartOperationType.Item);
const resetErrors = initializeErrorResetter(DaffCartOperationType.Item);
const setLoading = initializeLoadingSetter(DaffCartOperationType.Item);

export function cartItemReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartItemActionTypes.CartItemListAction:
    case DaffCartItemActionTypes.CartItemLoadAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffLoadingState.Resolving)
      };

    case DaffCartItemActionTypes.CartItemUpdateAction:
    case DaffCartItemActionTypes.CartItemAddAction:
    case DaffCartItemActionTypes.CartItemDeleteAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffLoadingState.Mutating)
      };

    case DaffCartItemActionTypes.CartItemListSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          items: action.payload
        },
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    case DaffCartItemActionTypes.CartItemLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          items: state.cart.items.map(item =>
            item.item_id === action.payload.item_id
              ? action.payload
              : item
          )
        },
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
    case DaffCartItemActionTypes.CartItemAddSuccessAction:
    case DaffCartItemActionTypes.CartItemDeleteSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          ...action.payload
        },
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    case DaffCartItemActionTypes.CartItemListFailureAction:
    case DaffCartItemActionTypes.CartItemLoadFailureAction:
    case DaffCartItemActionTypes.CartItemUpdateFailureAction:
    case DaffCartItemActionTypes.CartItemAddFailureAction:
    case DaffCartItemActionTypes.CartItemDeleteFailureAction:
      return {
        ...state,
        ...addError(state.errors, action.payload),
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    default:
      return state;
  }
}
