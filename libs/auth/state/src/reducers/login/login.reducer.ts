import {
  DaffLoginInfo,
  DaffAuthToken,
} from '@daffodil/auth';

import {
  DaffAuthLoginActionTypes,
  DaffAuthLoginActions,
} from '../../actions/public_api';
import { daffAuthLoginInitialState } from './login-initial-state';
import { DaffAuthLoginReducerState } from './login-reducer-state.interface';

export function daffAuthLoginReducer<
  T extends DaffLoginInfo,
  U extends DaffAuthToken,
>(
  state = daffAuthLoginInitialState,
  action: DaffAuthLoginActions<T, U>,
): DaffAuthLoginReducerState {
  switch (action.type) {
    case DaffAuthLoginActionTypes.LoginAction:
    case DaffAuthLoginActionTypes.LogoutAction:
      return {
        ...state,
        loading: true,
      };

    case DaffAuthLoginActionTypes.LoginSuccessAction:
    case DaffAuthLoginActionTypes.LogoutSuccessAction:
      return {
        ...state,
        loading: false,
        errors: [],
      };

    case DaffAuthLoginActionTypes.LoginFailureAction:
    case DaffAuthLoginActionTypes.LogoutFailureAction:
      return {
        ...state,
        loading: false,
        errors: [action.errorMessage],
      };

    default:
      return state;
  }
}
