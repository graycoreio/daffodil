import {
  DaffCartShippingInformationActionTypes,
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartErrorType } from '../errors/cart-error-type.enum';
import { DaffCart } from '../../models/cart';
import { initializeErrorAdder, initializeErrorReseter } from '../errors/error-state-helpers';

const addError = initializeErrorAdder(DaffCartErrorType.ShippingInformation);
const resetErrors = initializeErrorReseter(DaffCartErrorType.ShippingInformation);

export function cartShippingInformationReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction:
      return { ...state, loading: true };

    case DaffCartShippingInformationActionTypes.CartShippingInformationLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          // TODO: remove workaround
          shipping_information: {...action.payload, address_id: null}
        },
        loading: false,
      };

    case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          // ensure that shipping_information is set to null in case its not included in action.payload
          shipping_information: null,
          ...action.payload
        },
        loading: false,
      };

    case DaffCartShippingInformationActionTypes.CartShippingInformationLoadFailureAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateFailureAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteFailureAction:
      return {
        ...state,
        ...addError(state.errors, action.payload),
        loading: false,
      };

    default:
      return state;
  }
}
