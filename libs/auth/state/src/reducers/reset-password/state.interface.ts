import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import { DaffStateError } from '@daffodil/core/state';

export interface DaffAuthResetPasswordReducerState {
  loading: boolean;
  errors: DaffStateError[];
  token: DaffAuthResetPasswordInfo['token'];
}
