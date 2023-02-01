import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffIdentifiable } from '@daffodil/core';
import { DaffCustomerAddress } from '@daffodil/customer';
import { DaffCustomerAddressDriverInterface } from '@daffodil/customer/driver';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';

/**
 * A basic customer driver that creates mock customer results of different kinds.
 * For testing purposes.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerAddressTestingDriver implements DaffCustomerAddressDriverInterface {
  constructor(
    private factory: DaffCustomerAddressFactory,
  ) {}

  list(): Observable<DaffCustomerAddress[]> {
    return of(this.factory.createMany(3));
  }

  get(addressId: string): Observable<DaffCustomerAddress> {
    return of(this.factory.create({ id: addressId }));
  }

  update(address: Partial<DaffCustomerAddress> & DaffIdentifiable): Observable<DaffCustomerAddress[]> {
    return of(this.factory.createMany(3));
  }

  add(address: DaffCustomerAddress): Observable<DaffCustomerAddress[]> {
    return of(this.factory.createMany(3));
  }

  delete(addressId: string): Observable<DaffCustomerAddress[]> {
    return of(this.factory.createMany(3));
  }
}
