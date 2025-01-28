import { DaffCart } from '@daffodil/cart';
import { DaffState } from '@daffodil/core/state';
import { DaffLoadingState } from '@daffodil/core/state';

import {
  DaffCartShippingAddressActionTypes,
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

const addError = initializeErrorAdder(DaffCartOperationType.ShippingAddress);
const resetErrors = initializeErrorResetter(DaffCartOperationType.ShippingAddress);
const setLoading = initializeLoadingSetter(DaffCartOperationType.ShippingAddress);

export function cartShippingAddressReducer<T extends DaffCart>(
  state = daffCartReducerInitialState,
  action: ActionTypes,
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Resolving),
      };

    case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction:
    case DaffCartAddressActionTypes.CartAddressUpdateAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Updating),
      };

    case DaffCartShippingAddressActionTypes.CartShippingAddressLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          shipping_address: action.payload,
        },
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction:
    case DaffCartAddressActionTypes.CartAddressUpdateSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartShippingAddressActionTypes.CartShippingAddressLoadFailureAction:
    case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateFailureAction:
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
