import { ActionReducerMap } from '@ngrx/store';

import { DaffAuthFeatureState } from './auth-feature-state.interface';
import { daffAuthReducer } from './auth/public_api';
import { daffAuthLoginReducer } from './login/public_api';
import { daffAuthRegisterReducer } from './register/public_api';
import { DaffAuthToken } from '../models/auth-token';

export function daffAuthReducers <T extends DaffAuthToken>(): ActionReducerMap<DaffAuthFeatureState<T>> {
  return {
    auth: daffAuthReducer,
    login: daffAuthLoginReducer,
    register: daffAuthRegisterReducer
  };
}
