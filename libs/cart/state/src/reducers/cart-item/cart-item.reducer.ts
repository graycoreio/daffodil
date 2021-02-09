import { DaffCart } from '@daffodil/cart';

import { DaffCartItemActionTypes } from '../../actions/public_api';
import { ActionTypes } from '../action-types.type';
import { initialState } from '../cart-initial-state';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  initializeErrorAdder,
  initializeErrorResetter,
} from '../errors/error-state-helpers';
import {
  DaffCartItemLoadingState,
  initializeLoadingSetter,
} from '../loading/cart-loading.type';

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
        ...setLoading(state.loading, DaffCartItemLoadingState.Resolving),
      };

    case DaffCartItemActionTypes.CartItemAddAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffCartItemLoadingState.Adding),
      };

    case DaffCartItemActionTypes.CartItemListSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          items: action.payload,
        },
        ...setLoading(state.loading, DaffCartItemLoadingState.Complete),
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
              : item,
          ),
        },
        ...setLoading(state.loading, DaffCartItemLoadingState.Complete),
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
        ...setLoading(state.loading, DaffCartItemLoadingState.Complete),
      };

    case DaffCartItemActionTypes.CartItemListFailureAction:
    case DaffCartItemActionTypes.CartItemLoadFailureAction:
    case DaffCartItemActionTypes.CartItemUpdateFailureAction:
    case DaffCartItemActionTypes.CartItemAddFailureAction:
    case DaffCartItemActionTypes.CartItemDeleteFailureAction:
      return {
        ...state,
        ...addError(state.errors, action.payload),
        ...setLoading(state.loading, DaffCartItemLoadingState.Complete),
      };

    default:
      return state;
  }
}
