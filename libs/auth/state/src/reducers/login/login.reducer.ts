import {
  DaffLoginInfo,
  DaffAuthToken,
  DaffAccountRegistration,
} from '@daffodil/auth';

import {
  DaffAuthActionTypes,
  DaffAuthActions,
} from '../../actions/auth.actions';
import { daffAuthLoginInitialState } from './login-initial-state';
import { DaffAuthLoginReducerState } from './login-reducer-state.interface';

export function daffAuthLoginReducer<
  T extends DaffLoginInfo,
  U extends DaffAuthToken,
  S extends DaffAccountRegistration,
>(
  state = daffAuthLoginInitialState,
  action: DaffAuthActions<
  T,
  U,
  S
  >,
): DaffAuthLoginReducerState<U> {
  switch (action.type) {
    case DaffAuthActionTypes.AuthLoginAction:
    case DaffAuthActionTypes.AuthLogoutAction:
      return {
        ...state,
        loading: true,
      };

    case DaffAuthActionTypes.AuthLoginSuccessAction:
      return {
        ...state,
        loading: false,
        auth: action.auth,
      };

    case DaffAuthActionTypes.AuthLogoutSuccessAction:
      return {
        ...state,
        auth: null,
        loading: false,
      };

    case DaffAuthActionTypes.AuthLoginFailureAction:
    case DaffAuthActionTypes.AuthLogoutFailureAction:
      return {
        ...state,
        loading: false,
        errors: [action.errorMessage],
      };

    default:
      return state;
  }
}
