import {
  DaffCartShippingAddressActionTypes,
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
    case DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction:
    case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction:
      return { ...state, loading: true };

    case DaffCartShippingAddressActionTypes.CartShippingAddressLoadSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          shipping_address: action.payload
        },
        loading: false,
        errors: {
          ...state.errors,
          [DaffCartErrorType.ShippingAddress]: []
        }
      };

    case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          ...action.payload
        },
        loading: false,
        errors: {
          ...state.errors,
          [DaffCartErrorType.ShippingAddress]: []
        }
      };

    case DaffCartShippingAddressActionTypes.CartShippingAddressLoadFailureAction:
    case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateFailureAction:
      return {
        ...state,
        loading: false,
        errors: {
          ...state.errors,
          [DaffCartErrorType.ShippingAddress]: state.errors[DaffCartErrorType.ShippingAddress].concat(new Array(action.payload))
        }
      };

    default:
      return state;
  }
}
