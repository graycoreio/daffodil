import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffStoreFacade,
  DaffStateError,
} from '@daffodil/core/state';

export interface DaffAuthLoginFacadeInterface extends DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;
}
