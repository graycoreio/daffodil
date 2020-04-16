import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';

export interface DaffNewsletterFacadeInterface extends DaffStoreFacade<Action> {
  success$ : Observable<boolean>;
  error$: Observable<string>;
  loading$: Observable<boolean>;
}