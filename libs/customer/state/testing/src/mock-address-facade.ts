import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {
  BehaviorSubject,
  of,
} from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { MockDaffOperationStateFacade } from '@daffodil/core/state/testing';
import {
  DaffCustomerAddressEntity,
  DaffCustomerAddressPageFacadeInterface,
} from '@daffodil/customer/state';

/**
 * Mocks out facade fields and methods for testing purposes.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffCustomerAddressPageFacade extends MockDaffOperationStateFacade implements DaffCustomerAddressPageFacadeInterface {
  addresses$ = new BehaviorSubject<DaffCustomerAddressEntity[]>([]);
  errors$ = new BehaviorSubject<DaffStateError[]>([]);

  getAddress() {
    return of(null);
  }
  dispatch(action: Action) {};
}
