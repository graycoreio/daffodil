import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';
import { DaffAuthToken } from '../models/auth-token';

export interface DaffAuthFacadeInterface<T extends DaffAuthToken> extends DaffStoreFacade<Action> {
  auth$: Observable<T>
  loading$: Observable<boolean>;
  token$: Observable<string>;
  errors$: Observable<string[]>;

  dispatch(action: Action): void;
}
