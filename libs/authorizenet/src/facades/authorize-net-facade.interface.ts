import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core';

export interface DaffAuthorizeNetFacadeInterface extends DaffStoreFacade<Action> {
  isAcceptJsLoaded$: Observable<boolean>;
  loading$: Observable<boolean>;
  paymentError$: Observable<string>;
  acceptJsLoadError$: Observable<string>;
}
