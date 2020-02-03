import { DaffAuthActionTypes, DaffAuthActions } from '../../actions/auth.actions';
import { AuthReducerState } from './auth-reducer-state.interface';
import { DaffLoginRequest } from '../../models/login-request';
import { DaffLoginResponse } from '../../models/login-response';
import { DaffRegisterRequest } from '../../models/register-request';
import { DaffRegisterResponse } from '../../models/register-response';

const initialState: AuthReducerState = {
  token: null,
  loading: false,
  errors: []
};

export function reducer<
  T extends DaffLoginRequest,
  U extends DaffLoginResponse,
  S extends DaffRegisterRequest,
  V extends DaffRegisterResponse
>(
  state = initialState,
  action: DaffAuthActions<
    DaffLoginRequest,
    DaffLoginResponse,
    DaffRegisterRequest,
    DaffRegisterResponse
  >
): AuthReducerState {
  switch (action.type) {
    // is it appropriate to overload action types or do we want to track loading/success states uniquely for login/register
    case DaffAuthActionTypes.AuthLoginAction:
    case DaffAuthActionTypes.AuthRegisterAction:
      return {...state, loading: true};
    case DaffAuthActionTypes.AuthLoginSuccessAction:
    case DaffAuthActionTypes.AuthRegisterSuccessAction:
      return {...state, loading: false, token: action.auth.token};
    case DaffAuthActionTypes.AuthLoginFailureAction:
    case DaffAuthActionTypes.AuthRegisterFailureAction:
      return {...state,
        loading: false,
        errors: [action.errorMessage]
      };
    default:
      return state;
  }
}
