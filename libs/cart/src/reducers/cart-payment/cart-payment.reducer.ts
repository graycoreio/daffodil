import {
  DaffCartPaymentActionTypes,
} from '../../actions';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartErrorType } from '../cart-error-type.enum';

export function reducer(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState {
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
        loading: false,
        errors: {
          ...state.errors,
          [DaffCartErrorType.Payment]: []
        }
      };

    case DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          payment: null
        },
        loading: false,
        errors: {
          ...state.errors,
          [DaffCartErrorType.Payment]: []
        }
      };

    case DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          ...action.payload
        },
        loading: false,
        errors: {
          ...state.errors,
          [DaffCartErrorType.Payment]: []
        }
      };

    case DaffCartPaymentActionTypes.CartPaymentLoadFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction:
      return {
        ...state,
        loading: false,
        errors: {
          ...state.errors,
          [DaffCartErrorType.Payment]: state.errors[DaffCartErrorType.Payment].concat(new Array(action.payload))
        }
      };

    default:
      return state;
  }
}
