import { ActionReducerMap } from '@ngrx/store';

import { DaffAuthorizeNetReducersState } from './authorize-net-reducers.interface';
import { authorizeNetReducer } from './authorize-net/authorize-net.reducer';

export const authorizeNetReducers: ActionReducerMap<DaffAuthorizeNetReducersState> = {
  authorizeNet: authorizeNetReducer
}