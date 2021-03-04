import {
  DaffAuthActionTypes,
  DaffAuthActions,
} from '../../actions/auth.actions';
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffLoginInfo } from '../../models/login-info';
import { daffAuthInitialState } from './auth-initial-state';
import { DaffAuthReducerState } from './auth-reducer-state.interface';

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
  >,
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
      loading: false,
    };

  case DaffAuthActionTypes.AuthCheckFailureAction:
    return {
      ...state,
      loading: false,
      errors: [action.errorMessage],
    };

  default:
    return state;
  }
}
