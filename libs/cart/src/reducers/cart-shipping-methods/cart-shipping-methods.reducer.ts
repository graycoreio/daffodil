import {
  DaffCartShippingMethodsActionTypes,
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
      [DaffCartErrorType.ShippingMethods]: state.errors[DaffCartErrorType.ShippingMethods].concat(new Array(error))
    }
  };
}

function resetErrors(state: DaffCartReducerState) {
  return {
    errors: {
      ...state.errors,
      [DaffCartErrorType.ShippingMethods]: []
    }
  };
}

export function cartShippingMethodsReducer(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState {
  switch (action.type) {
    case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction:
      return {...state, loading: true};

    case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state),
        cart: {
          ...state.cart,
          available_shipping_methods: action.payload
        },
        loading: false,
      };

    case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadFailureAction:
      return {
        ...state,
        ...addError(state, action.payload),
        loading: false,
      };

    default:
      return state;
  }
}
