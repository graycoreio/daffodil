import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoCustomer,
  MagentoCustomerAddress,
} from '@daffodil/customer/driver/magento';

import { MagentoCustomerAddressFactory } from './address.factory';

class MockMagentoCustomer implements MagentoCustomer {
  __typename = <const>'Customer';
  email = faker.internet.email();
  firstname = faker.name.firstName();
  lastname = faker.name.lastName();
  is_subscribed = faker.datatype.boolean();
  addresses = this.createAddresses();

  constructor(
    private addressFactory: MagentoCustomerAddressFactory,
  ) {}

  private createAddresses(): MagentoCustomerAddress[] {
    return this.addressFactory.createMany(faker.datatype.number({ min: 3, max: 5 }));
  }
}

@Injectable({
  providedIn: 'root',
})
export class MagentoCustomerFactory extends DaffModelFactory<MagentoCustomer> {
  constructor(
    addressFactory: MagentoCustomerAddressFactory,
  ) {
    super(MockMagentoCustomer, addressFactory);
  }
}
