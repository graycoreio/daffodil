import {
  DaffCartShippingInformationActionTypes,
} from '../../actions';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';

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
        cart: {
          ...state.cart,
          // TODO: remove workaround
          shipping_information: {...action.payload, address_id: null}
        },
        loading: false
      };

    case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          // ensure that shipping_information is set to null in case its not included in action.payload
          shipping_information: null,
          ...action.payload
        },
        loading: false
      };

    case DaffCartShippingInformationActionTypes.CartShippingInformationLoadFailureAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateFailureAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteFailureAction:
      return {
        ...state,
        loading: false,
        errors: state.errors.concat(new Array(action.payload))
      };

    default:
      return state;
  }
}
