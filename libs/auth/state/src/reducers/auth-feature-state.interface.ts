import { DaffAuthToken } from '@daffodil/auth';

import { DAFF_AUTH_STORE_FEATURE_KEY } from './auth-store-feature-key';
import { DaffAuthReducerState } from './auth/public_api';
import { DaffAuthLoginReducerState } from './login/public_api';
import { DaffAuthRegisterReducerState } from './register/public_api';

export interface DaffAuthFeatureState<T extends DaffAuthToken = DaffAuthToken> {
  auth: DaffAuthReducerState;
  login: DaffAuthLoginReducerState<T>;
  register: DaffAuthRegisterReducerState;
}

export interface DaffAuthStateRootSlice {
  [DAFF_AUTH_STORE_FEATURE_KEY]: DaffAuthFeatureState;
}
