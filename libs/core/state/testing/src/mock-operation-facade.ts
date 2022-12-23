import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import {
  DaffOperationStateFacadeInterface,
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

/**
 * Can be used to mock out the {@link DaffOperationStateFacade} in testing environments.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffOperationStateFacade implements DaffOperationStateFacadeInterface {
  loadingState$ = new BehaviorSubject<DaffState>(DaffState.Stable);
  loading$ = new BehaviorSubject<boolean>(false);
  resolving$ = new BehaviorSubject<boolean>(false);
  mutating$ = new BehaviorSubject<boolean>(false);
  errors$ = new BehaviorSubject<DaffStateError[]>([]);
  hasErrors$ = new BehaviorSubject<boolean>(false);

  dispatch(action: Action) {};
}
