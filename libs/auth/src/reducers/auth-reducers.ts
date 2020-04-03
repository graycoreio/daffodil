import { ActionReducerMap } from '@ngrx/store';

import { DaffAuthReducersState } from './auth-reducers-state.interface';
import { daffAuthReducer } from './auth/public_api';
import { daffAuthLoginReducer } from './login/public_api';
import { daffAuthRegisterReducer } from './register/public_api';

export const daffAuthReducers : ActionReducerMap<DaffAuthReducersState<any>> = {
  auth: daffAuthReducer,
  login: daffAuthLoginReducer,
  register: daffAuthRegisterReducer
}
