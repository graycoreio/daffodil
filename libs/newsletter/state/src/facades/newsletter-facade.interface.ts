import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffStoreFacade,
  DaffStateError,
} from '@daffodil/core/state';

export interface DaffNewsletterFacadeInterface extends DaffStoreFacade<Action> {
  success$: Observable<boolean>;
  error$: Observable<Array<DaffStateError>>;
  loading$: Observable<boolean>;
}
