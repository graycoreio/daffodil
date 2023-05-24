import {
  DaffLoginInfo,
  DaffAuthToken,
} from '@daffodil/auth';
import {
  daffCompleteOperation,
  daffOperationFailed,
  daffStartMutation,
} from '@daffodil/core/state';

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
      return daffStartMutation(state);

    case DaffAuthLoginActionTypes.LoginSuccessAction:
    case DaffAuthLoginActionTypes.LogoutSuccessAction:
      return daffCompleteOperation(state);

    case DaffAuthLoginActionTypes.LoginFailureAction:
    case DaffAuthLoginActionTypes.LogoutFailureAction:
      return daffOperationFailed([action.errorMessage], state);

    default:
      return state;
  }
}
