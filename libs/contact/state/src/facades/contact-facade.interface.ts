import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffStoreFacade,
  DaffStateError,
} from '@daffodil/core/state';

export interface DaffContactFacadeInterface extends DaffStoreFacade<Action> {
  success$: Observable<boolean>;
  error$: Observable<DaffStateError[]>;
  loading$: Observable<boolean>;
}
