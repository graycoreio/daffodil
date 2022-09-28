import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffPaymentPageFacadeInterface } from '@daffodil/payment/state';

/**
 * Mocks out facade fields and methods for testing purposes.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffPaymentPageFacade implements DaffPaymentPageFacadeInterface {
  loading$ = new BehaviorSubject<boolean>(null);
  errors$ = new BehaviorSubject<DaffStateError[]>([]);

  dispatch(action: Action) {};
}
