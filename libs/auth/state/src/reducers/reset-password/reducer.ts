import { DaffAuthResetPasswordInfo } from '@daffodil/auth';

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
      return {
        ...state,
        loading: true,
      };

    case DaffAuthResetPasswordActionTypes.ResetPasswordSuccessAction:
    case DaffAuthResetPasswordActionTypes.SendResetEmailSuccessAction:
      return {
        ...state,
        loading: false,
        errors: [],
      };

    case DaffAuthResetPasswordActionTypes.ResetPasswordFailureAction:
    case DaffAuthResetPasswordActionTypes.SendResetEmailFailureAction:
      return {
        ...state,
        loading: false,
        errors: [action.errorMessage],
      };

    case DaffAuthResetPasswordActionTypes.ResetPasswordLandingAction:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
}
