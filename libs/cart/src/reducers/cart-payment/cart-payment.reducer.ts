import { DaffLoadingState } from '@daffodil/core';

import {
  DaffCartPaymentActionTypes,
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCart } from '../../models/cart';
import { initializeErrorAdder, initializeErrorResetter } from '../errors/error-state-helpers';
import { initializeLoadingSetter } from '../loading/loading-state-helpers';

const addError = initializeErrorAdder(DaffCartOperationType.Payment);
const resetErrors = initializeErrorResetter(DaffCartOperationType.Payment);
const setLoading = initializeLoadingSetter(DaffCartOperationType.Payment);

export function cartPaymentReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartPaymentActionTypes.CartPaymentLoadAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffLoadingState.Resolving)
      };

    case DaffCartPaymentActionTypes.CartPaymentUpdateAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction:
    case DaffCartPaymentActionTypes.CartPaymentRemoveAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffLoadingState.Mutating)
      };

    case DaffCartPaymentActionTypes.CartPaymentLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          payment: action.payload
        },
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    case DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          payment: null
        },
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    case DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          ...action.payload
        },
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    case DaffCartPaymentActionTypes.CartPaymentLoadFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction:
      return {
        ...state,
        ...addError(state.errors, action.payload),
        ...setLoading(state.loading, DaffLoadingState.Complete),
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
						...action.payload
					}
				}
			};


    default:
      return state;
  }
}
