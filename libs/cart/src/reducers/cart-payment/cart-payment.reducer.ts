import {
  DaffCartPaymentActionTypes,
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartErrorType } from '../errors/cart-error-type.enum';
import { DaffCart } from '../../models/cart';
import { initializeErrorAdder, initializeErrorResetter } from '../errors/error-state-helpers';

const addError = initializeErrorAdder(DaffCartErrorType.Payment);
const resetErrors = initializeErrorResetter(DaffCartErrorType.Payment);

export function cartPaymentReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartPaymentActionTypes.CartPaymentLoadAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateAction:
    case DaffCartPaymentActionTypes.CartPaymentRemoveAction:
      return { ...state, loading: true };

    case DaffCartPaymentActionTypes.CartPaymentLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          payment: action.payload
        },
        loading: false,
      };

    case DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          payment: null
        },
        loading: false,
      };

    case DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          ...action.payload
        },
        loading: false,
      };

    case DaffCartPaymentActionTypes.CartPaymentLoadFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction:
      return {
        ...state,
        ...addError(state.errors, action.payload),
        loading: false,
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
