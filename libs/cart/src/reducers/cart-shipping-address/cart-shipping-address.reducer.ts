import {
  DaffCartShippingAddressActionTypes,
} from '../../actions';
import { initialState } from '../cart-initial-state';
import { CartState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';

export function reducer(
  state = initialState,
  action: ActionTypes
): CartState {
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
        loading: false
      };

    case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          ...action.payload
        },
        loading: false
      };

    case DaffCartShippingAddressActionTypes.CartShippingAddressLoadFailureAction:
    case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateFailureAction:
      return {
        ...state,
        loading: false,
        errors: state.errors.concat(new Array(action.payload))
      };

    default:
      return state;
  }
}
