import { ActionReducerMap } from '@ngrx/store';

import { DaffAuthFeatureState } from './auth-reducers-state.interface';
import { daffAuthReducer } from './auth/public_api';
import { daffAuthLoginReducer } from './login/public_api';
import { daffAuthRegisterReducer } from './register/public_api';

export const daffAuthReducers : ActionReducerMap<DaffAuthFeatureState<any>> = {
  auth: daffAuthReducer,
  login: daffAuthLoginReducer,
  register: daffAuthRegisterReducer
}
