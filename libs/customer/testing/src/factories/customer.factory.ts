import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffCustomer,
  DaffCustomerAddress,
} from '@daffodil/customer';

import { DaffCustomerAddressFactory } from './customer-address.factory';

/**
 * Mock class for {@link DaffCustomer}.
 */
export class MockDaffCustomer implements DaffCustomer {
  id = faker.datatype.uuid();
  email = faker.internet.email();
  firstName = faker.name.firstName();
  lastName = faker.name.lastName();
  isSubscribed = faker.datatype.boolean();
  addresses = this.createAddresses();

  constructor(
    private addressFactory: DaffCustomerAddressFactory,
  ) {}

  private createAddresses(): DaffCustomerAddress[] {
    return this.addressFactory.createMany(faker.datatype.number({ min: 1, max: 4 }));
  }
};

/**
 * Model factory for {@link DaffCustomer}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerFactory extends DaffModelFactory<DaffCustomer>{
  constructor(
    addressFactory: DaffCustomerAddressFactory,
  ) {
    super(MockDaffCustomer, addressFactory);
  }
}
