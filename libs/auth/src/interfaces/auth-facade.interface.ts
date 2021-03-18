import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffStoreFacade,
  DaffStateError,
} from '@daffodil/core/state';

import { DaffAuthToken } from '../models/auth-token';

export interface DaffAuthFacadeInterface<T extends DaffAuthToken = DaffAuthToken> extends DaffStoreFacade<Action> {
  auth$: Observable<T>;
  token$: Observable<T['token']>;

  authLoading$: Observable<boolean>;
  authErrors$: Observable<DaffStateError[]>;

  loginLoading$: Observable<boolean>;
  loginErrors$: Observable<DaffStateError[]>;

  registerLoading$: Observable<boolean>;
  registerErrors$: Observable<DaffStateError[]>;

  dispatch(action: Action): void;
}
