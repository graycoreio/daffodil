import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core';

export interface DaffContactFacadeInterface extends DaffStoreFacade<Action> {
  success$: Observable<boolean>;
  error$: Observable<string[]>;
  loading$: Observable<boolean>;
}