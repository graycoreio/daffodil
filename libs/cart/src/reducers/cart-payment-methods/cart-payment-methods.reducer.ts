import {
  DaffCartPaymentMethodsActionTypes
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
    case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction:
      return { ...state, loading: true };

    case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          available_payment_methods: action.payload
        },
        loading: false,
        errors: {
          ...state.errors,
          [DaffCartErrorType.PaymentMethods]: []
        }
      };

    case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadFailureAction:
      return {
        ...state,
        loading: false,
        errors: {
          ...state.errors,
          [DaffCartErrorType.PaymentMethods]: state.errors[DaffCartErrorType.PaymentMethods].concat(new Array(action.payload))
        }
      };

    default:
      return state;
  }
}
