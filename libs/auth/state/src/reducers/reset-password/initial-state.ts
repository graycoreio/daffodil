import { daffOperationInitialState } from '@daffodil/core/state';

import { DaffAuthResetPasswordReducerState } from './state.interface';

export const daffAuthResetPasswordInitialState: DaffAuthResetPasswordReducerState = {
  ...daffOperationInitialState,
  token: null,
};
