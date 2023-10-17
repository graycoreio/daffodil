import { DaffAccountRegistration } from '@daffodil/auth';
import {
  daffCompleteOperation,
  daffOperationFailed,
  daffStartMutation,
} from '@daffodil/core/state';

import { daffAuthRegisterInitialState } from './register-initial-state';
import { DaffAuthRegisterReducerState } from './register-reducer-state.interface';
import {
  DaffAuthRegisterActionTypes,
  DaffAuthRegisterActions,
} from '../../actions/public_api';

export function daffAuthRegisterReducer<
  T extends DaffAccountRegistration,
>(
  state = daffAuthRegisterInitialState,
  action: DaffAuthRegisterActions<T>,
): DaffAuthRegisterReducerState {
  switch (action.type) {
    case DaffAuthRegisterActionTypes.RegisterAction:
      return daffStartMutation(state);

    case DaffAuthRegisterActionTypes.RegisterSuccessAction:
      return daffCompleteOperation(state);

    case DaffAuthRegisterActionTypes.RegisterFailureAction:
      return daffOperationFailed([action.errorMessage], state);

    default:
      return state;
  }
}
