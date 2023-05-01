import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';
import { DaffCustomerStoreCreditDriverInterface } from '@daffodil/customer-store-credit/driver';
import { DaffCustomerStoreCreditFactory } from '@daffodil/customer-store-credit/testing';

/**
 * A basic customer driver that creates mock customer results of different kinds.
 * For testing purposes.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerStoreCreditTestingDriver implements DaffCustomerStoreCreditDriverInterface {
  constructor(
    private factory: DaffCustomerStoreCreditFactory,
  ) {}

  get(): Observable<DaffCustomerStoreCredit> {
    return of(this.factory.create());
  }
}
