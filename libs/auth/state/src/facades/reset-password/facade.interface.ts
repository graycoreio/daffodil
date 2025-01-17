import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import {
  DaffStoreFacade,
  DaffStateError,
} from '@daffodil/core/state';

export interface DaffAuthResetPasswordFacadeInterface extends DaffStoreFacade<Action> {
  token$: Observable<DaffAuthResetPasswordInfo['token']>;

  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;
}
