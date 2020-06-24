import { DaffAuthorizeNetReducerState } from './authorize-net-reducer.interface';
import { DaffAuthorizeNetActions, DaffAuthorizeNetActionTypes } from '../../actions/authorizenet.actions';
import { DaffAuthorizeNetTokenRequest } from '../../models/request/authorize-net-token-request';

export const initialState: DaffAuthorizeNetReducerState = {
	error: null,
	loading: false
}

export function daffAuthorizeNetReducer <T extends DaffAuthorizeNetTokenRequest>
	(state: DaffAuthorizeNetReducerState = initialState, action: DaffAuthorizeNetActions<T>): DaffAuthorizeNetReducerState {
  switch (action.type) {
		case DaffAuthorizeNetActionTypes.GenerateTokenAction:
			return {
				...state,
				loading: true
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
				loading: false,
				error: action.payload
			};
    default:
      return state;
  }
}
