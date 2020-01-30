import { ActionReducerMap } from '@ngrx/store';

import { AuthReducersState } from './auth-reducers.interface';
import { reducer } from './auth/auth.reducer';

export const authReducers: ActionReducerMap<AuthReducersState> = {
  auth: reducer
}
