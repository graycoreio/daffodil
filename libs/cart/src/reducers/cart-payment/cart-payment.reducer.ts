import {
  DaffCartPaymentActionTypes,
} from '../../actions';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartErrorType } from '../cart-error-type.enum';

function addError(state: DaffCartReducerState, error: string) {
  return {
    ...state,
    errors: {
      ...state.errors,
      [DaffCartErrorType.Payment]: state.errors[DaffCartErrorType.Payment].concat(new Array(error))
    }
  };
}

function resetErrors(state: DaffCartReducerState) {
  return {
    errors: {
      ...state.errors,
      [DaffCartErrorType.Payment]: []
    }
  };
}

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
        ...resetErrors(state),
        cart: {
          ...state.cart,
          payment: action.payload
        },
        loading: false,
      };

    case DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction:
      return {
        ...state,
        ...resetErrors(state),
        cart: {
          ...state.cart,
          payment: null
        },
        loading: false,
      };

    case DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction:
      return {
        ...state,
        ...resetErrors(state),
        cart: {
          ...state.cart,
          ...action.payload
        },
        loading: false,
      };

    case DaffCartPaymentActionTypes.CartPaymentLoadFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction:
      return {
        ...state,
        ...addError(state, action.payload),
        loading: false,
      };

    default:
      return state;
  }
}
