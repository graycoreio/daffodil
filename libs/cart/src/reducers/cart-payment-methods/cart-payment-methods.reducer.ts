import {
  DaffCartPaymentMethodsActionTypes
} from '../../actions';
import { initialState } from '../cart-initial-state';
import { CartState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';

export function reducer(
  state = initialState,
  action: ActionTypes
): CartState {
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
        loading: false
      };

    case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadFailureAction:
      return {
        ...state,
        loading: false,
        errors: state.errors.concat(new Array(action.payload))
      };

    default:
      return state;
  }
}
