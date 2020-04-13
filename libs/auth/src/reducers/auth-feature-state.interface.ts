import { DaffAuthToken } from '../models/auth-token';
import { DaffAuthReducerState } from './auth/public_api';
import { DaffAuthLoginReducerState } from './login/public_api';
import { DaffAuthRegisterReducerState } from './register/public_api';

export interface DaffAuthFeatureState<T extends DaffAuthToken> {
  auth: DaffAuthReducerState,
  login: DaffAuthLoginReducerState<T>,
  register: DaffAuthRegisterReducerState
}
