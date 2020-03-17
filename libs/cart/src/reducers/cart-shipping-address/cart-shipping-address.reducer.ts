import {
  DaffCartShippingAddressActionTypes,
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
      [DaffCartErrorType.ShippingAddress]: state.errors[DaffCartErrorType.ShippingAddress].concat(new Array(error))
    }
  };
}

function resetErrors(state: DaffCartReducerState) {
  return {
    errors: {
      ...state.errors,
      [DaffCartErrorType.ShippingAddress]: []
    }
  };
}

export function cartShippingAddressReducer(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState {
  switch (action.type) {
    case DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction:
    case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction:
      return { ...state, loading: true };

    case DaffCartShippingAddressActionTypes.CartShippingAddressLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state),
        cart: {
          ...state.cart,
          shipping_address: action.payload
        },
        loading: false,
      };

    case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction:
      return {
        ...state,
        ...resetErrors(state),
        cart: {
          ...state.cart,
          ...action.payload
        },
        loading: false,
      };

    case DaffCartShippingAddressActionTypes.CartShippingAddressLoadFailureAction:
    case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateFailureAction:
      return {
        ...state,
        ...addError(state, action.payload),
        loading: false,
      };

    default:
      return state;
  }
}
