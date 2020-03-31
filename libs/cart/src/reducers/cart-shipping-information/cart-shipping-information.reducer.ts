import {
  DaffCartShippingInformationActionTypes,
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartErrorType } from '../cart-error-type.enum';
import { DaffCart } from '../../models/cart';

function addError<T extends DaffCart>(state: DaffCartReducerState<T>, error: string) {
  return {
    ...state,
    errors: {
      ...state.errors,
      [DaffCartErrorType.ShippingInformation]: state.errors[DaffCartErrorType.ShippingInformation].concat(new Array(error))
    }
  };
}

function resetErrors<T extends DaffCart>(state: DaffCartReducerState<T>) {
  return {
    errors: {
      ...state.errors,
      [DaffCartErrorType.ShippingInformation]: []
    }
  };
}

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
        ...resetErrors(state),
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
        ...resetErrors(state),
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
        ...addError(state, action.payload),
        loading: false,
      };

    default:
      return state;
  }
}
