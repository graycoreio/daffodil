import {
  DaffCartPaymentMethodsActionTypes
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartErrorType } from '../cart-error-type.enum';
import { DaffCart } from '../../models/cart';

function addError<T extends DaffCart>(state: DaffCartReducerState<T>, error: string) {
  return {
    ...state,
    errors: {
      ...state.errors,
      [DaffCartErrorType.PaymentMethods]: state.errors[DaffCartErrorType.PaymentMethods].concat(new Array(error))
    }
  };
}

function resetErrors<T extends DaffCart>(state: DaffCartReducerState<T>) {
  return {
    errors: {
      ...state.errors,
      [DaffCartErrorType.PaymentMethods]: []
    }
  };
}

export function cartPaymentMethodsReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
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
