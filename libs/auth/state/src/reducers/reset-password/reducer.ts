import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import {
  daffCompleteOperation,
  daffOperationFailed,
  daffStartMutation,
} from '@daffodil/core/state';

import {
  DaffAuthResetPasswordActionTypes,
  DaffAuthResetPasswordActions,
} from '../../actions/public_api';
import { daffAuthResetPasswordInitialState } from './initial-state';
import { DaffAuthResetPasswordReducerState } from './state.interface';

export function daffAuthResetPasswordReducer<
  T extends DaffAuthResetPasswordInfo = DaffAuthResetPasswordInfo,
>(
  state = daffAuthResetPasswordInitialState,
  action: DaffAuthResetPasswordActions<T>,
): DaffAuthResetPasswordReducerState {
  switch (action.type) {
    case DaffAuthResetPasswordActionTypes.ResetPasswordAction:
    case DaffAuthResetPasswordActionTypes.SendResetEmailAction:
      return daffStartMutation(state);

    case DaffAuthResetPasswordActionTypes.ResetPasswordSuccessAction:
    case DaffAuthResetPasswordActionTypes.SendResetEmailSuccessAction:
      return daffCompleteOperation(state);

    case DaffAuthResetPasswordActionTypes.ResetPasswordFailureAction:
    case DaffAuthResetPasswordActionTypes.SendResetEmailFailureAction:
      return daffOperationFailed([action.errorMessage], state);

    case DaffAuthResetPasswordActionTypes.ResetPasswordLandingAction:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
}
