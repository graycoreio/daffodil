import {
  DaffCartActionTypes,
} from '../../actions';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';

export function reducer(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState {
  switch (action.type) {
    case DaffCartActionTypes.CartLoadAction:
    case DaffCartActionTypes.CartClearAction:
    case DaffCartActionTypes.AddToCartAction:
    case DaffCartActionTypes.CartCreateAction:
      return { ...state, loading: true };

    case DaffCartActionTypes.CartLoadSuccessAction:
    case DaffCartActionTypes.CartClearSuccessAction:
    case DaffCartActionTypes.AddToCartSuccessAction:
    case DaffCartActionTypes.CartCreateSuccessAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          ...action.payload
        },
        loading: false
      };

    case DaffCartActionTypes.CartLoadFailureAction:
    case DaffCartActionTypes.CartClearFailureAction:
    case DaffCartActionTypes.AddToCartFailureAction:
    case DaffCartActionTypes.CartCreateFailureAction:
      return {
        ...state,
        loading: false,
        errors: state.errors.concat(new Array(action.payload))
      };

    default:
      return state;
  }
}
