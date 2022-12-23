import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';
import { DaffCustomerPageFacadeInterface } from '@daffodil/customer/state';

/**
 * Mocks out facade fields and methods for testing purposes.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffCustomerPageFacade implements DaffCustomerPageFacadeInterface {
  customer$ = new BehaviorSubject<DaffCustomer>(null);
  loading$ = new BehaviorSubject<boolean>(null);
  errors$ = new BehaviorSubject<DaffStateError[]>([]);

  dispatch(action: Action) {};
}
