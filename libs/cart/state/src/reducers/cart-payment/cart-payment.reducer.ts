import { DaffCart } from '@daffodil/cart';
import { DaffState } from '@daffodil/core/state';
import { DaffLoadingState } from '@daffodil/core/state';

import { DaffCartPaymentActionTypes } from '../../actions/public_api';
import { ActionTypes } from '../action-types.type';
import { daffCartReducerInitialState } from '../cart-initial-state';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  initializeErrorAdder,
  initializeErrorResetter,
} from '../errors/error-state-helpers';
import { initializeLoadingSetter } from '../loading/cart-loading.type';

const addError = initializeErrorAdder(DaffCartOperationType.Payment);
const resetErrors = initializeErrorResetter(DaffCartOperationType.Payment);
const setLoading = initializeLoadingSetter(DaffCartOperationType.Payment);

export function cartPaymentReducer<T extends DaffCart = DaffCart>(
  state = daffCartReducerInitialState,
  action: ActionTypes<T>,
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartPaymentActionTypes.CartPaymentLoadAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Resolving),
      };

    case DaffCartPaymentActionTypes.CartPaymentUpdateAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction:
    case DaffCartPaymentActionTypes.CartPaymentRemoveAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Updating),
      };

    case DaffCartPaymentActionTypes.CartPaymentLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          payment: action.payload,
        },
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          payment: null,
        },
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartPaymentActionTypes.CartPaymentLoadFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction:
      return {
        ...state,
        ...addError(state.errors, ...action.payload),
        ...setLoading(state.loading, DaffState.Stable),
      };


    /**
     * This reducer is temporary until custom reducers can be injected by the @daffodil/paymentSource modules. Right now,
     * the payment modules need a way to update cart state with a payment token.
     *
     * todo: remove when possible.
     */
    case DaffCartPaymentActionTypes.CartPaymentMethodAddAction:
      return {
        ...state,
        cart: {
          ...state.cart,
          payment: {
            ...action.payload,
          },
        },
      };


    default:
      return state;
  }
}
