import { ActionReducerMap } from '@ngrx/store';

import { DaffAuthFeatureState } from './auth-feature-state.interface';
import { daffAuthReducer } from './auth/public_api';
import { daffAuthLoginReducer } from './login/public_api';
import { daffAuthRegisterReducer } from './register/public_api';
import { daffAuthResetPasswordReducer } from './reset-password/public_api';

export const daffAuthReducers: ActionReducerMap<DaffAuthFeatureState> = {
  auth: daffAuthReducer,
  login: daffAuthLoginReducer,
  register: daffAuthRegisterReducer,
  resetPassword: daffAuthResetPasswordReducer,
};
