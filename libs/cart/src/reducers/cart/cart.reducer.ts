import {
  DaffCartActionTypes,
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartErrorType } from '../errors/cart-error-type.enum';
import { DaffCart } from '../../models/cart';
import { initializeErrorAdder, initializeErrorResetter } from '../errors/error-state-helpers';

const addError = initializeErrorAdder(DaffCartErrorType.Cart);
const resetErrors = initializeErrorResetter(DaffCartErrorType.Cart);

export function cartReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartActionTypes.ResolveCartAction:
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
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          ...action.payload
        },
        loading: false,
      };

    case DaffCartActionTypes.CartLoadFailureAction:
    case DaffCartActionTypes.CartClearFailureAction:
    case DaffCartActionTypes.AddToCartFailureAction:
    case DaffCartActionTypes.CartCreateFailureAction:
      return {
        ...state,
        ...addError(state.errors, action.payload),
        loading: false,
      };

    case DaffCartActionTypes.CartStorageFailureAction:
        return {
          ...state,
          ...addError(state.errors, 'Cart Storage Failed'),
          loading: false,
        };

    default:
      return state;
  }
}
