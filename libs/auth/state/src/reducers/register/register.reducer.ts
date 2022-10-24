import { DaffAccountRegistration } from '@daffodil/auth';

import {
  DaffAuthRegisterActionTypes,
  DaffAuthRegisterActions,
} from '../../actions/public_api';
import { daffAuthRegisterInitialState } from './register-initial-state';
import { DaffAuthRegisterReducerState } from './register-reducer-state.interface';

export function daffAuthRegisterReducer<
  T extends DaffAccountRegistration,
>(
  state = daffAuthRegisterInitialState,
  action: DaffAuthRegisterActions<T>,
): DaffAuthRegisterReducerState {
  switch (action.type) {
    case DaffAuthRegisterActionTypes.RegisterAction:
      return {
        ...state,
        loading: true,
      };

    case DaffAuthRegisterActionTypes.RegisterSuccessAction:
      return {
        ...state,
        loading: false,
      };

    case DaffAuthRegisterActionTypes.RegisterFailureAction:
      return {
        ...state,
        loading: false,
        errors: [action.errorMessage],
      };

    default:
      return state;
  }
}
