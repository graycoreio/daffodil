import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffCustomer } from '@daffodil/customer';
import { DaffCustomerDriverInterface } from '@daffodil/customer/driver';
import { DaffCustomerFactory } from '@daffodil/customer/testing';

/**
 * A basic customer driver that creates mock customer results of different kinds.
 * For testing purposes.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerTestingDriver implements DaffCustomerDriverInterface {
  constructor(
    private customerFactory: DaffCustomerFactory,
  ) {}

  changeEmail(email: string, password: string): Observable<DaffCustomer> {
    return of(this.customerFactory.create({ email }));
  }

  changePassword(oldPassword: string, newPassword: string): Observable<void> {
    return of(undefined);
  }

  get(): Observable<DaffCustomer> {
    return of(this.customerFactory.create());
  }

  update(customer: Partial<DaffCustomer>): Observable<DaffCustomer> {
    return of(this.customerFactory.create(customer));
  }
}
