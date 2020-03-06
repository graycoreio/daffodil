import {
  DaffCartItemActionTypes,
} from '../../actions';
import { initialState } from '../cart-initial-state';
import { CartState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';

export function reducer(
  state = initialState,
  action: ActionTypes
): CartState {
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
        cart: {
          ...state.cart,
          items: action.payload
        },
        loading: false
      };

    case DaffCartItemActionTypes.CartItemLoadSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.map(item =>
            item.item_id === action.payload.item_id
              ? action.payload
              : item
          )
        },
        loading: false
      };

    case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
    case DaffCartItemActionTypes.CartItemAddSuccessAction:
    case DaffCartItemActionTypes.CartItemDeleteSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          ...action.payload
        },
        loading: false
      };

    case DaffCartItemActionTypes.CartItemListFailureAction:
    case DaffCartItemActionTypes.CartItemLoadFailureAction:
    case DaffCartItemActionTypes.CartItemUpdateFailureAction:
    case DaffCartItemActionTypes.CartItemAddFailureAction:
    case DaffCartItemActionTypes.CartItemDeleteFailureAction:
      return {
        ...state,
        loading: false,
        errors: state.errors.concat(new Array(action.payload))
      };

    default:
      return state;
  }
}
