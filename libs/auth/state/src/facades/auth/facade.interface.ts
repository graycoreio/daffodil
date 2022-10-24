import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffStoreFacade,
  DaffStateError,
} from '@daffodil/core/state';

export interface DaffAuthFacadeInterface extends DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;

  dispatch(action: Action): void;
}
