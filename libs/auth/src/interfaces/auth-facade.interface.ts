import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';
import { DaffAuthToken } from '../models/auth-token';

export interface DaffAuthFacadeInterface<T extends DaffAuthToken = DaffAuthToken> extends DaffStoreFacade<Action> {
  auth$: Observable<T>;
  token$: Observable<T['token']>

  authLoading$: Observable<boolean>;
  authErrors$: Observable<string[]>;

  loginLoading$: Observable<boolean>;
  loginErrors$: Observable<string[]>;

  registerLoading$: Observable<boolean>;
  registerErrors$: Observable<string[]>;

  dispatch(action: Action): void;
}
