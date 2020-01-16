import { DaffAuthorizeNetReducerState } from './authorize-net-reducer.interface';
import { DaffAuthorizeNetActions, DaffAuthorizeNetActionTypes } from '../../actions/authorizenet.actions';

const initialState: DaffAuthorizeNetReducerState = {
	paymentNonce: null,
	error: null
};

export function authorizeNetReducer(state = initialState, action: DaffAuthorizeNetActions): DaffAuthorizeNetReducerState {
  switch (action.type) {
    case DaffAuthorizeNetActionTypes.GenerateTokenSuccessAction:
      return { 
				...state,
				paymentNonce: action.payload,
				error: null
			};
		case DaffAuthorizeNetActionTypes.GenerateTokenFailureAction:
			return {
				...state,
				paymentNonce: null,
				error: action.payload
			};
    default:
      return state;
  }
}
