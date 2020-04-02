import { DaffAuthActionTypes, DaffAuthActions } from '../actions/auth.actions';
import { DaffAuthReducerState } from './auth-reducer-state.interface';
import { DaffAuthToken } from '../models/auth-token';
import { DaffLoginInfo } from '../models/login-info';
import { DaffAccountRegistration } from '../models/account-registration';
import { daffAuthInitialState } from './auth-initial-state';

export function daffAuthReducer<
  T extends DaffLoginInfo,
  U extends DaffAuthToken,
  S extends DaffAccountRegistration,
>(
  state = daffAuthInitialState,
  action: DaffAuthActions<
    T,
    U,
    S
  >
): DaffAuthReducerState<U> {
  switch (action.type) {
    case DaffAuthActionTypes.AuthLoginAction:
    case DaffAuthActionTypes.AuthLogoutAction:
    case DaffAuthActionTypes.AuthCheckAction:
    case DaffAuthActionTypes.AuthRegisterAction:
      return {
        ...state,
        loading: true
      };

    case DaffAuthActionTypes.AuthRegisterSuccessAction:
    case DaffAuthActionTypes.AuthCheckSuccessAction:
      return {
        ...state,
        loading: false
      };

    case DaffAuthActionTypes.AuthLoginSuccessAction:
      return {
        ...state,
        loading: false,
        auth: action.auth
      };

    case DaffAuthActionTypes.AuthLogoutSuccessAction:
      return {
        ...state,
        auth: null,
        loading: false,
      };

    case DaffAuthActionTypes.AuthLoginFailureAction:
    case DaffAuthActionTypes.AuthLogoutFailureAction:
    case DaffAuthActionTypes.AuthCheckFailureAction:
    case DaffAuthActionTypes.AuthRegisterFailureAction:
      return {
        ...state,
        loading: false,
        errors: [action.errorMessage]
      };

    default:
      return state;
  }
}
