import {
  daffCompleteOperation,
  daffOperationFailed,
  daffStartResolution,
} from '@daffodil/core/state';

import { daffAuthInitialState } from './auth-initial-state';
import { DaffAuthReducerState } from './auth-reducer-state.interface';
import {
  DaffAuthActionTypes,
  DaffAuthActions,
  DaffAuthLoginActionTypes,
  DaffAuthLoginActions,
  DaffAuthRegisterActionTypes,
  DaffAuthRegisterSuccess,
  DaffAuthResetPasswordActionTypes,
  DaffAuthResetPasswordActions,
} from '../../actions/public_api';

export function daffAuthReducer(
  state = daffAuthInitialState,
  action: DaffAuthActions | DaffAuthLoginActions | DaffAuthRegisterSuccess | DaffAuthResetPasswordActions,
): DaffAuthReducerState {
  switch (action.type) {
    case DaffAuthActionTypes.AuthCheckAction:
      return daffStartResolution(state);

    case DaffAuthActionTypes.AuthCheckSuccessAction:
      return {
        ...daffCompleteOperation(state),
        loggedIn: true,
      };

    case DaffAuthActionTypes.AuthCheckFailureAction:
      return {
        ...daffOperationFailed([action.errorMessage], state),
        loggedIn: false,
      };

    case DaffAuthActionTypes.AuthGuardLogoutAction:
      return {
        ...daffCompleteOperation(state),
        daffErrors: [action.errorMessage],
        loggedIn: false,
      };

    case DaffAuthActionTypes.AuthServerSideAction:
    case DaffAuthActionTypes.AuthStorageFailureAction:
      return daffOperationFailed([action.errorMessage], state);

    case DaffAuthLoginActionTypes.LoginSuccessAction:
      return {
        ...state,
        loggedIn: true,
      };

    case DaffAuthRegisterActionTypes.RegisterSuccessAction:
    case DaffAuthResetPasswordActionTypes.ResetPasswordSuccessAction:
      return action.token ? {
        ...state,
        loggedIn: true,
      } : state;

    case DaffAuthLoginActionTypes.LogoutSuccessAction:
      return {
        ...state,
        loggedIn: false,
      };

    default:
      return state;
  }
}
