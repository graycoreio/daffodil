import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffStoreFacade,
  DaffStateError,
} from '@daffodil/core/state';

export interface DaffPaypalFacadeInterface extends DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  paypalStartUrl$: Observable<string>;
  paypalEditUrl$: Observable<string>;
  error$: Observable<DaffStateError>;
}
