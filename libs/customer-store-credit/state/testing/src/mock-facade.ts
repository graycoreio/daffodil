import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { MockDaffOperationStateFacade } from '@daffodil/core/state/testing';
import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';
import { DaffCustomerStoreCreditPageFacadeInterface } from '@daffodil/customer-store-credit/state';

/**
 * Mocks out facade fields and methods for testing purposes.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffCustomerStoreCreditPageFacade extends MockDaffOperationStateFacade implements DaffCustomerStoreCreditPageFacadeInterface {
  storeCredit$ = new BehaviorSubject<DaffCustomerStoreCredit>(null);

  dispatch(action: Action) {};
}
