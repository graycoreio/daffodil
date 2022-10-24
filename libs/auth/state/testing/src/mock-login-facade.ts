import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffAuthLoginFacadeInterface } from '@daffodil/auth/state';
import { DaffStateError } from '@daffodil/core/state';

/**
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffAuthLoginFacade implements DaffAuthLoginFacadeInterface {
  loading$ = new BehaviorSubject<boolean>(false);
  errors$ = new BehaviorSubject<DaffStateError[]>([]);

  dispatch(action: Action) {};
}
