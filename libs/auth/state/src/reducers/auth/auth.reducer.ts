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
import { daffAuthInitialState } from './auth-initial-state';
import { DaffAuthReducerState } from './auth-reducer-state.interface';

export function daffAuthReducer(
  state = daffAuthInitialState,
  action: DaffAuthActions | DaffAuthLoginActions | DaffAuthRegisterSuccess | DaffAuthResetPasswordActions,
): DaffAuthReducerState {
  switch (action.type) {
    case DaffAuthActionTypes.AuthCheckAction:
      return {
        ...state,
        loading: true,
      };

    case DaffAuthActionTypes.AuthCheckSuccessAction:
      return {
        ...state,
        loggedIn: true,
        loading: false,
        errors: [],
      };

    case DaffAuthActionTypes.AuthCheckFailureAction:
    case DaffAuthActionTypes.AuthGuardLogoutAction:
      return {
        ...state,
        loggedIn: false,
        loading: false,
        errors: [action.errorMessage],
      };

    case DaffAuthActionTypes.AuthServerSideAction:
    case DaffAuthActionTypes.AuthStorageFailureAction:
      return {
        ...state,
        loading: false,
        errors: [action.errorMessage],
      };

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
