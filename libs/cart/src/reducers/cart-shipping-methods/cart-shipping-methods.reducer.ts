import {
  DaffCartShippingMethodsActionTypes,
} from '../../actions';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';

export function reducer(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState {
  switch (action.type) {
    case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction:
      return {...state, loading: true};

    case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          available_shipping_methods: action.payload
        },
        loading: false
      };

    case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadFailureAction:
      return {
        ...state,
        loading: false,
        errors: state.errors.concat(new Array(action.payload))
      };

    default:
      return state;
  }
}
