import { DaffCart } from '@daffodil/cart';
import { DaffState } from '@daffodil/core/state';

import { DaffCartItemActionTypes } from '../../actions/public_api';
import { ActionTypes } from '../action-types.type';
import { initialState } from '../cart-initial-state';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  initializeErrorAdder,
  initializeErrorResetter,
} from '../errors/error-state-helpers';
import { initializeLoadingSetter } from '../loading/cart-loading.type';

const addError = initializeErrorAdder(DaffCartOperationType.Item);
const resetErrors = initializeErrorResetter(DaffCartOperationType.Item);
const setLoading = initializeLoadingSetter(DaffCartOperationType.Item);

export function cartItemReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes,
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartItemActionTypes.CartItemListAction:
    case DaffCartItemActionTypes.CartItemLoadAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Resolving),
      };

    case DaffCartItemActionTypes.CartItemAddAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Adding),
      };

    case DaffCartItemActionTypes.CartItemListSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          items: action.payload,
        },
        ...setLoading(state.loading, DaffState.Complete),
      };

    case DaffCartItemActionTypes.CartItemLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          items: state.cart.items.map(item =>
            item.id === action.payload.id
              ? action.payload
              : item,
          ),
        },
        ...setLoading(state.loading, DaffState.Complete),
      };

    case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
    case DaffCartItemActionTypes.CartItemAddSuccessAction:
    case DaffCartItemActionTypes.CartItemDeleteSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          ...action.payload,
        },
        ...setLoading(state.loading, DaffState.Complete),
      };

    case DaffCartItemActionTypes.CartItemListFailureAction:
    case DaffCartItemActionTypes.CartItemLoadFailureAction:
    case DaffCartItemActionTypes.CartItemUpdateFailureAction:
    case DaffCartItemActionTypes.CartItemAddFailureAction:
    case DaffCartItemActionTypes.CartItemDeleteFailureAction:
      return {
        ...state,
        ...addError(state.errors, action.payload),
        ...setLoading(state.loading, DaffState.Complete),
      };

    case DaffCartItemActionTypes.CartItemUpdateFailureAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Complete),
      };

    default:
      return state;
  }
}
