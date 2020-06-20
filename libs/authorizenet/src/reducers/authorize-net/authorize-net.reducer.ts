import { DaffAuthorizeNetReducerState } from './authorize-net-reducer.interface';
import { DaffAuthorizeNetActions, DaffAuthorizeNetActionTypes } from '../../actions/authorizenet.actions';
import { DaffAuthorizeNetTokenRequest } from '../../models/request/authorize-net-token-request';
import { DaffCartPaymentActionTypes, DaffCartPaymentActions, DaffCartPaymentMethod } from '@daffodil/cart';

export const initialState: DaffAuthorizeNetReducerState = {
	cc_last_4: null,
	error: null,
	loading: false
}

export function daffAuthorizeNetReducer <T extends DaffAuthorizeNetTokenRequest, V extends DaffCartPaymentMethod>
	(state: DaffAuthorizeNetReducerState = initialState, action: DaffAuthorizeNetActions<T, V> | DaffCartPaymentActions): DaffAuthorizeNetReducerState {
  switch (action.type) {
		case DaffAuthorizeNetActionTypes.GenerateTokenAction:
			return {
				...state,
				loading: true,
				cc_last_4: action.payload.creditCard.cardnumber.slice(12)
			}
		case DaffCartPaymentActionTypes.CartPaymentMethodAddAction:
			return {
				...state,
				loading: false,
				error: null,
			}
    case DaffAuthorizeNetActionTypes.GenerateTokenSuccessAction:
      return { 
				...state,
				loading: false,
				error: null
			};
		case DaffAuthorizeNetActionTypes.GenerateTokenFailureAction:
			return {
				...state,
				error: action.payload
			};
    default:
      return state;
  }
}
