import { DaffAuthActionTypes, DaffAuthActions } from '../../actions/auth.actions';
import { DaffAuthRegisterReducerState } from './register-reducer-state.interface';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffAccountRegistration } from '../../models/account-registration';
import { daffAuthRegisterInitialState } from './register-initial-state';

export function daffAuthRegisterReducer<
  T extends DaffLoginInfo,
  U extends DaffAuthToken,
  S extends DaffAccountRegistration,
>(
  state = daffAuthRegisterInitialState,
  action: DaffAuthActions<
    T,
    U,
    S
  >
): DaffAuthRegisterReducerState {
  switch (action.type) {
    case DaffAuthActionTypes.AuthRegisterAction:
      return {
        ...state,
        loading: true
      };

    case DaffAuthActionTypes.AuthRegisterSuccessAction:
      return {
        ...state,
        loading: false
      };

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
