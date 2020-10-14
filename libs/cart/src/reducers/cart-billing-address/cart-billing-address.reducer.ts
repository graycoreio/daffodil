import { DaffLoadingState } from '@daffodil/core/state';

import {
  DaffCartBillingAddressActionTypes,
  DaffCartAddressActionTypes
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCart } from '../../models/cart';
import { initializeErrorAdder, initializeErrorResetter } from '../errors/error-state-helpers';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { initializeLoadingSetter } from '../loading/loading-state-helpers';

const addError = initializeErrorAdder(DaffCartOperationType.BillingAddress);
const resetErrors = initializeErrorResetter(DaffCartOperationType.BillingAddress);
const setLoading = initializeLoadingSetter(DaffCartOperationType.BillingAddress);

export function cartBillingAddressReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffLoadingState.Resolving)
      };

    case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction:
    case DaffCartAddressActionTypes.CartAddressUpdateAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffLoadingState.Mutating)
      };

    case DaffCartBillingAddressActionTypes.CartBillingAddressLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          billing_address: action.payload
        },
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction:
    case DaffCartAddressActionTypes.CartAddressUpdateSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          ...action.payload
        },
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    case DaffCartBillingAddressActionTypes.CartBillingAddressLoadFailureAction:
    case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateFailureAction:
    case DaffCartAddressActionTypes.CartAddressUpdateFailureAction:
      return {
        ...state,
        ...addError(state.errors, action.payload),
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    default:
      return state;
  }
}
