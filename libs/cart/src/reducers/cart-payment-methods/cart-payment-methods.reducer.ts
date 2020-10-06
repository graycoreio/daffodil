import { DaffLoadingState } from '@daffodil/core';

import {
  DaffCartPaymentMethodsActionTypes
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCart } from '../../models/cart';
import { initializeErrorAdder, initializeErrorResetter } from '../errors/error-state-helpers';
import { initializeLoadingSetter } from '../loading/loading-state-helpers';

const addError = initializeErrorAdder(DaffCartOperationType.PaymentMethods);
const resetErrors = initializeErrorResetter(DaffCartOperationType.PaymentMethods);
const setLoading = initializeLoadingSetter(DaffCartOperationType.PaymentMethods);

export function cartPaymentMethodsReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffLoadingState.Resolving)
      };

    case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          available_payment_methods: action.payload
        },
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadFailureAction:
      return {
        ...state,
        ...addError(state.errors, action.payload),
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    default:
      return state;
  }
}
