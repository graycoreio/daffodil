import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import { DaffOperationState } from '@daffodil/core/state';

export interface DaffAuthResetPasswordReducerState extends DaffOperationState {
  token: DaffAuthResetPasswordInfo['token'];
}
