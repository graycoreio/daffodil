import { daffOperationInitialState } from '@daffodil/core/state';

import { DaffAuthReducerState } from './auth-reducer-state.interface';

export const daffAuthInitialState: DaffAuthReducerState = {
  ...daffOperationInitialState,
  loggedIn: false,
};
