import {
  DaffCartPaymentActionTypes,
} from '../../actions';
import { initialState } from '../cart-initial-state';
import { CartState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';

export function reducer(
  state = initialState,
  action: ActionTypes
): CartState {
  switch (action.type) {
    case DaffCartPaymentActionTypes.CartPaymentLoadAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateAction:
    case DaffCartPaymentActionTypes.CartPaymentRemoveAction:
      return { ...state, loading: true };

    case DaffCartPaymentActionTypes.CartPaymentLoadSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          payment: action.payload
        },
        loading: false
      };

    case DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          payment: null
        },
        loading: false
      };

    case DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          ...action.payload
        },
        loading: false
      };

    case DaffCartPaymentActionTypes.CartPaymentLoadFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction:
      return {
        ...state,
        loading: false,
        errors: state.errors.concat(new Array(action.payload))
      };

    default:
      return state;
  }
}
