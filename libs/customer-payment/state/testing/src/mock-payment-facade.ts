import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {
  BehaviorSubject,
  of,
} from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { MockDaffOperationStateFacade } from '@daffodil/core/state/testing';
import {
  DaffCustomerPaymentEntity,
  DaffCustomerPaymentPageFacadeInterface,
} from '@daffodil/customer-payment/state';

/**
 * Mocks out facade fields and methods for testing purposes.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffCustomerPaymentPageFacade extends MockDaffOperationStateFacade implements DaffCustomerPaymentPageFacadeInterface {
  payments$ = new BehaviorSubject<DaffCustomerPaymentEntity[]>([]);
  errors$ = new BehaviorSubject<DaffStateError[]>([]);

  getPayment() {
    return of(null);
  }
  dispatch(action: Action) {};
}
