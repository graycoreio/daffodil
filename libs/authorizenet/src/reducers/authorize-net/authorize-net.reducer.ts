import { DaffAuthorizeNetReducerState } from './authorize-net-reducer.interface';
import { DaffAuthorizeNetActions, DaffAuthorizeNetActionTypes } from '../../actions/authorizenet.actions';
import { DaffAuthorizeNetTokenRequest } from '../../models/request/authorize-net-token-request';

export const initialState: DaffAuthorizeNetReducerState = {
	isAcceptLoaded: false,
	paymentError: null,
	acceptJsLoadError: null,
	loading: false
}

export function daffAuthorizeNetReducer <T extends DaffAuthorizeNetTokenRequest>
	(state: DaffAuthorizeNetReducerState = initialState, action: DaffAuthorizeNetActions<T>): DaffAuthorizeNetReducerState {
  switch (action.type) {
		case DaffAuthorizeNetActionTypes.UpdatePaymentAction:
			return {
				...state,
				loading: true
			}
    case DaffAuthorizeNetActionTypes.UpdatePaymentSuccessAction:
      return { 
				...state,
				loading: false,
				paymentError: null
			};
		case DaffAuthorizeNetActionTypes.UpdatePaymentFailureAction:
			return {
				...state,
				loading: false,
				paymentError: action.payload
			};
		case DaffAuthorizeNetActionTypes.LoadAcceptJsSuccessAction:
			return {
				...state,
				isAcceptLoaded: true,
				acceptJsLoadError: null
			}
		case DaffAuthorizeNetActionTypes.LoadAcceptJsFailureAction:
			return {
				...state,
				loading: false,
				acceptJsLoadError: action.payload
			}
    default:
      return state;
  }
}
