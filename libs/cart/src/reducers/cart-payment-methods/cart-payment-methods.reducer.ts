import {
  DaffCartPaymentMethodsActionTypes
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartErrorType } from '../cart-error-type.enum';

function addError(state: DaffCartReducerState, error: string) {
  return {
    ...state,
    errors: {
      ...state.errors,
      [DaffCartErrorType.PaymentMethods]: state.errors[DaffCartErrorType.PaymentMethods].concat(new Array(error))
    }
  };
}

function resetErrors(state: DaffCartReducerState) {
  return {
    errors: {
      ...state.errors,
      [DaffCartErrorType.PaymentMethods]: []
    }
  };
}

export function cartPaymentMethodsReducer(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState {
  switch (action.type) {
    case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction:
      return { ...state, loading: true };

    case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state),
        cart: {
          ...state.cart,
          available_payment_methods: action.payload
        },
        loading: false,
      };

    case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadFailureAction:
      return {
        ...state,
        ...addError(state, action.payload),
        loading: false,
      };

    default:
      return state;
  }
}
