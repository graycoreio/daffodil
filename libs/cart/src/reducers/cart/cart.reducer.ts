import { DaffLoadingState } from '@daffodil/core/state';

import {
  DaffCartActionTypes,
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCart } from '../../models/cart';
import { initializeErrorAdder, initializeErrorResetter } from '../errors/error-state-helpers';
import { initializeLoadingSetter } from '../loading/loading-state-helpers';

const addError = initializeErrorAdder(DaffCartOperationType.Cart);
const resetErrors = initializeErrorResetter(DaffCartOperationType.Cart);
const setLoading = initializeLoadingSetter(DaffCartOperationType.Cart);

export function cartReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartActionTypes.ResolveCartAction:
    case DaffCartActionTypes.CartLoadAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffLoadingState.Resolving)
      };

    case DaffCartActionTypes.CartClearAction:
    case DaffCartActionTypes.AddToCartAction:
    case DaffCartActionTypes.CartCreateAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffLoadingState.Mutating)
      };

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
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

		case DaffCartActionTypes.CartCreateSuccessAction:
			return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...initialState.cart,
          ...action.payload
        },
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };
		case DaffCartActionTypes.CartLoadFailureAction:
    case DaffCartActionTypes.CartClearFailureAction:
    case DaffCartActionTypes.AddToCartFailureAction:
    case DaffCartActionTypes.CartCreateFailureAction:
    case DaffCartActionTypes.CartStorageFailureAction:

      return {
        ...state,
        ...addError(state.errors, action.payload),
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    default:
      return state;
  }
}
