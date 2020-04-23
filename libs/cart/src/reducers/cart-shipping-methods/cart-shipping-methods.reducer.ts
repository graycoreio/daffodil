import {
  DaffCartShippingMethodsActionTypes,
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartErrorType } from '../errors/cart-error-type.enum';
import { DaffCart } from '../../models/cart';
import { initializeErrorAdder, initializeErrorReseter } from '../errors/error-state-helpers';

const addError = initializeErrorAdder(DaffCartErrorType.ShippingMethods);
const resetErrors = initializeErrorReseter(DaffCartErrorType.ShippingMethods);

export function cartShippingMethodsReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction:
      return {...state, loading: true};

    case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          available_shipping_methods: action.payload
        },
        loading: false,
      };

    case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadFailureAction:
      return {
        ...state,
        ...addError(state.errors, action.payload),
        loading: false,
      };

    default:
      return state;
  }
}
