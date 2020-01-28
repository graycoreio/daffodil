import { DaffAuthorizeNetReducerState } from './authorize-net-reducer.interface';
import { DaffAuthorizeNetActions, DaffAuthorizeNetActionTypes } from '../../actions/authorizenet.actions';
import { DaffAuthorizeNetTokenResponse } from '../../models/response/authorize-net-token-response';
import { DaffAuthorizeNetTokenRequest } from '../../models/request/authorize-net-token-request';

function getInitialState <T extends DaffAuthorizeNetTokenResponse>(): DaffAuthorizeNetReducerState<T> {
	return {
		tokenResponse: null,
		error: null
	}
};

export function daffAuthorizeNetReducer <T extends DaffAuthorizeNetTokenRequest, V extends DaffAuthorizeNetTokenResponse>
	(state: DaffAuthorizeNetReducerState<V> = getInitialState(), action: DaffAuthorizeNetActions<T, V>): DaffAuthorizeNetReducerState<V> {
  switch (action.type) {
    case DaffAuthorizeNetActionTypes.GenerateTokenSuccessAction:
      return { 
				...state,
				tokenResponse: action.payload,
				error: null
			};
		case DaffAuthorizeNetActionTypes.GenerateTokenFailureAction:
			return {
				...state,
				tokenResponse: null,
				error: action.payload
			};
    default:
      return state;
  }
}
