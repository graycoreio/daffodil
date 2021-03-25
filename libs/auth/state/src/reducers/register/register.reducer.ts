import {
  DaffLoginInfo,
  DaffAuthToken,
  DaffAccountRegistration,
} from '@daffodil/auth';

import {
  DaffAuthActionTypes,
  DaffAuthActions,
} from '../../actions/auth.actions';
import { daffAuthRegisterInitialState } from './register-initial-state';
import { DaffAuthRegisterReducerState } from './register-reducer-state.interface';

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
  >,
): DaffAuthRegisterReducerState {
  switch (action.type) {
    case DaffAuthActionTypes.AuthRegisterAction:
      return {
        ...state,
        loading: true,
      };

    case DaffAuthActionTypes.AuthRegisterSuccessAction:
      return {
        ...state,
        loading: false,
      };

    case DaffAuthActionTypes.AuthRegisterFailureAction:
      return {
        ...state,
        loading: false,
        errors: [action.errorMessage],
      };

    default:
      return state;
  }
}
