import {
  DaffCartShippingInformationActionTypes,
} from '../../actions';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartErrorType } from '../cart-error-type.enum';

function addError(state: DaffCartReducerState, error: string) {
  return {
    ...state,
    errors: {
      ...state.errors,
      [DaffCartErrorType.ShippingInformation]: state.errors[DaffCartErrorType.ShippingInformation].concat(new Array(error))
    }
  };
}

function resetErrors(state: DaffCartReducerState) {
  return {
    errors: {
      ...state.errors,
      [DaffCartErrorType.ShippingInformation]: []
    }
  };
}

export function reducer(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState {
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
