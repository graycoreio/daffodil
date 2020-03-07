import {
  DaffCartBillingAddressActionTypes,
} from '../../actions';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';

export function reducer(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState {
  switch (action.type) {
    case DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction:
    case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction:
      return { ...state, loading: true };

    case DaffCartBillingAddressActionTypes.CartBillingAddressLoadSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          billing_address: action.payload
        },
        loading: false
      };

    case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          ...action.payload
        },
        loading: false
      };

    case DaffCartBillingAddressActionTypes.CartBillingAddressLoadFailureAction:
    case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateFailureAction:
      return {
        ...state,
        loading: false,
        errors: state.errors.concat(new Array(action.payload))
      };

    default:
      return state;
  }
}
