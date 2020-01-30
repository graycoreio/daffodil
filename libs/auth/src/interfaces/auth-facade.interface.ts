import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';

export interface DaffAuthFacadeInterface extends DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  token$: Observable<string>;
  errors$: Observable<string[]>;
  dispatch(action: Action): void;
}
