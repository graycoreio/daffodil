import { DaffLoadingState } from '@daffodil/core/state';

import {
  DaffCartShippingMethodsActionTypes,
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCart } from '../../models/cart';
import { initializeErrorAdder, initializeErrorResetter } from '../errors/error-state-helpers';
import { initializeLoadingSetter } from '../loading/loading-state-helpers';

const addError = initializeErrorAdder(DaffCartOperationType.ShippingMethods);
const resetErrors = initializeErrorResetter(DaffCartOperationType.ShippingMethods);
const setLoading = initializeLoadingSetter(DaffCartOperationType.ShippingMethods);

export function cartShippingMethodsReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffLoadingState.Resolving)
      };

    case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          available_shipping_methods: action.payload
        },
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadFailureAction:
      return {
        ...state,
        ...addError(state.errors, action.payload),
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    default:
      return state;
  }
}
