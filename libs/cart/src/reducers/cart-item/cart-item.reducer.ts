import {
  DaffCartItemActionTypes,
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartErrorType } from '../errors/cart-error-type.enum';
import { DaffCart } from '../../models/cart';
import { initializeErrorAdder, initializeErrorResetter } from '../errors/error-state-helpers';

const addError = initializeErrorAdder(DaffCartErrorType.Item);
const resetErrors = initializeErrorResetter(DaffCartErrorType.Item);

export function cartItemReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartItemActionTypes.CartItemListAction:
    case DaffCartItemActionTypes.CartItemLoadAction:
    case DaffCartItemActionTypes.CartItemUpdateAction:
    case DaffCartItemActionTypes.CartItemAddAction:
    case DaffCartItemActionTypes.CartItemDeleteAction:
      return { ...state, loading: true };

    case DaffCartItemActionTypes.CartItemListSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          items: action.payload
        },
        loading: false,
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
        loading: false,
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
        loading: false,
      };

    case DaffCartItemActionTypes.CartItemListFailureAction:
    case DaffCartItemActionTypes.CartItemLoadFailureAction:
    case DaffCartItemActionTypes.CartItemUpdateFailureAction:
    case DaffCartItemActionTypes.CartItemAddFailureAction:
    case DaffCartItemActionTypes.CartItemDeleteFailureAction:
      return {
        ...state,
        ...addError(state.errors, action.payload),
        loading: false,
      };

    default:
      return state;
  }
}
