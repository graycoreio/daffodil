import { ActionReducerMap } from '@ngrx/store';

import { DaffAuthFeatureState } from './auth-feature-state.interface';
import { daffAuthReducer } from './auth/public_api';
import { daffAuthLoginReducer } from './login/public_api';
import { daffAuthRegisterReducer } from './register/public_api';

export const daffAuthReducers: ActionReducerMap<DaffAuthFeatureState<T>> = {
  auth: daffAuthReducer,
  login: daffAuthLoginReducer,
  register: daffAuthRegisterReducer
}
