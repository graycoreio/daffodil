import { DaffCart } from '@daffodil/cart';
import { DaffState } from '@daffodil/core/state';

import { DaffCartPaymentMethodsActionTypes } from '../../actions/public_api';
import { ActionTypes } from '../action-types.type';
import { daffCartReducerInitialState } from '../cart-initial-state';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  initializeErrorAdder,
  initializeErrorResetter,
} from '../errors/error-state-helpers';
import { initializeLoadingSetter } from '../loading/cart-loading.type';

const addError = initializeErrorAdder(DaffCartOperationType.PaymentMethods);
const resetErrors = initializeErrorResetter(DaffCartOperationType.PaymentMethods);
const setLoading = initializeLoadingSetter(DaffCartOperationType.PaymentMethods);

export function cartPaymentMethodsReducer<T extends DaffCart = DaffCart>(
  state = daffCartReducerInitialState,
  action: ActionTypes<T>,
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Resolving),
      };

    case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          available_payment_methods: action.payload,
        },
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadFailureAction:
      return {
        ...state,
        ...addError(state.errors, ...action.payload),
        ...setLoading(state.loading, DaffState.Stable),
      };

    default:
      return state;
  }
}
