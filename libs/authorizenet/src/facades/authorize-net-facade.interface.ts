import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core';

export interface DaffAuthorizeNetFacadeInterface extends DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  error$: Observable<string>;
}
