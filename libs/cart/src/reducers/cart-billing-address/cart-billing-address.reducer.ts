import {
  DaffCartBillingAddressActionTypes,
  DaffCartAddressActionTypes
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCart } from '../../models/cart';
import { initializeErrorAdder, initializeErrorResetter } from '../errors/error-state-helpers';
import { DaffCartErrorType } from '../errors/cart-error-type.enum';

const addError = initializeErrorAdder(DaffCartErrorType.BillingAddress);
const resetErrors = initializeErrorResetter(DaffCartErrorType.BillingAddress);

export function cartBillingAddressReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction:
    case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction:
    case DaffCartAddressActionTypes.CartAddressUpdateAction:
      return { ...state, loading: true };

    case DaffCartBillingAddressActionTypes.CartBillingAddressLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          billing_address: action.payload
        },
        loading: false,
      };

    case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction:
    case DaffCartAddressActionTypes.CartAddressUpdateSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          ...action.payload
        },
        loading: false,
      };

    case DaffCartBillingAddressActionTypes.CartBillingAddressLoadFailureAction:
    case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateFailureAction:
    case DaffCartAddressActionTypes.CartAddressUpdateFailureAction:
      return {
        ...state,
        ...addError(state.errors, action.payload),
        loading: false,
      };

    default:
      return state;
  }
}
