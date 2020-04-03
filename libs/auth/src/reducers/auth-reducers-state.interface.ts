import { DaffAuthToken } from '../models/auth-token';
import { DaffAuthReducerState } from './auth/public_api';
import { DaffAuthLoginReducerState } from './login/public_api';
import { DaffAuthRegisterReducerState } from './register/public_api';

export interface DaffAuthReducersState {
  auth: DaffAuthReducerState,
  login: DaffAuthLoginReducerState<DaffAuthToken>,
  register: DaffAuthRegisterReducerState
}
