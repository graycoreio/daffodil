import {
  DaffCartShippingAddressActionTypes,
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartErrorType } from '../errors/cart-error-type.enum';
import { DaffCart } from '../../models/cart';
import { initializeErrorAdder, initializeErrorResetter } from '../errors/error-state-helpers';

const addError = initializeErrorAdder(DaffCartErrorType.ShippingAddress);
const resetErrors = initializeErrorResetter(DaffCartErrorType.ShippingAddress);

export function cartShippingAddressReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction:
    case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction:
      return { ...state, loading: true };

    case DaffCartShippingAddressActionTypes.CartShippingAddressLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          shipping_address: action.payload
        },
        loading: false,
      };

    case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
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
        ...addError(state.errors, action.payload),
        loading: false,
      };

    default:
      return state;
  }
}
