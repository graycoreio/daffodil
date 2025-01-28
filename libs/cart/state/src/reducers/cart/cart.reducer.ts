import { DaffCart } from '@daffodil/cart';
import { DaffState } from '@daffodil/core/state';

import { DaffCartActionTypes } from '../../actions/public_api';
import { ActionTypes } from '../action-types.type';
import { daffCartReducerInitialState } from '../cart-initial-state';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  initializeErrorAdder,
  initializeErrorResetter,
} from '../errors/error-state-helpers';
import { initializeLoadingSetter } from '../loading/cart-loading.type';

const addError = initializeErrorAdder(DaffCartOperationType.Cart);
const resetErrors = initializeErrorResetter(DaffCartOperationType.Cart);
const setLoading = initializeLoadingSetter(DaffCartOperationType.Cart);

export function cartReducer<T extends DaffCart = DaffCart>(
  state = daffCartReducerInitialState,
  action: ActionTypes<T>,
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartActionTypes.ResolveCartAction:
    case DaffCartActionTypes.CartLoadAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Resolving),
      };

    case DaffCartActionTypes.CartClearAction:
    case DaffCartActionTypes.AddToCartAction:
    case DaffCartActionTypes.CartCreateAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Updating),
      };

    case DaffCartActionTypes.CartLoadSuccessAction:
    case DaffCartActionTypes.CartClearSuccessAction:
    case DaffCartActionTypes.AddToCartSuccessAction:
    case DaffCartActionTypes.ResolveCartSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartActionTypes.CartCreateSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...daffCartReducerInitialState.cart,
          ...action.payload,
        },
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartActionTypes.CartClearFailureAction:
    case DaffCartActionTypes.AddToCartFailureAction:
    case DaffCartActionTypes.CartCreateFailureAction:
    case DaffCartActionTypes.CartStorageFailureAction:
    case DaffCartActionTypes.CartLoadFailureAction:
    case DaffCartActionTypes.ResolveCartFailureAction:
      return {
        ...state,
        ...addError(state.errors, ...action.payload),
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartActionTypes.ResolveCartPartialSuccessAction:
    case DaffCartActionTypes.CartLoadPartialSuccessAction:
      return {
        ...state,
        ...addError(state.errors, ...action.errors),
        ...setLoading(state.loading, DaffState.Stable),
      };

    default:
      return state;
  }
}
