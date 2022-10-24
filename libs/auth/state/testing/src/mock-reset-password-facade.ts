import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffAuthResetPasswordFacadeInterface } from '@daffodil/auth/state';
import { DaffStateError } from '@daffodil/core/state';

/**
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffAuthResetPasswordFacade implements DaffAuthResetPasswordFacadeInterface {
  token$ = new BehaviorSubject<string>('');
  loading$ = new BehaviorSubject<boolean>(false);
  errors$ = new BehaviorSubject<DaffStateError[]>([]);

  dispatch(action: Action) {};
}
