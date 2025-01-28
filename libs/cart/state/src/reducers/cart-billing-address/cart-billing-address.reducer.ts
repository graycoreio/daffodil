import { DaffCart } from '@daffodil/cart';
import { DaffState } from '@daffodil/core/state';

import {
  DaffCartBillingAddressActionTypes,
  DaffCartAddressActionTypes,
} from '../../actions/public_api';
import { ActionTypes } from '../action-types.type';
import { daffCartReducerInitialState } from '../cart-initial-state';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  initializeErrorAdder,
  initializeErrorResetter,
} from '../errors/error-state-helpers';
import { initializeLoadingSetter } from '../loading/cart-loading.type';

const addError = initializeErrorAdder(DaffCartOperationType.BillingAddress);
const resetErrors = initializeErrorResetter(DaffCartOperationType.BillingAddress);
const setLoading = initializeLoadingSetter(DaffCartOperationType.BillingAddress);

export function cartBillingAddressReducer<T extends DaffCart = DaffCart>(
  state = daffCartReducerInitialState,
  action: ActionTypes<T>,
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Resolving),
      };

    case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction:
    case DaffCartAddressActionTypes.CartAddressUpdateAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Updating),
      };

    case DaffCartBillingAddressActionTypes.CartBillingAddressLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          billing_address: action.payload,
        },
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction:
    case DaffCartAddressActionTypes.CartAddressUpdateSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartBillingAddressActionTypes.CartBillingAddressLoadFailureAction:
    case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateFailureAction:
    case DaffCartAddressActionTypes.CartAddressUpdateFailureAction:
      return {
        ...state,
        ...addError(state.errors, ...action.payload),
        ...setLoading(state.loading, DaffState.Stable),
      };

    default:
      return state;
  }
}
