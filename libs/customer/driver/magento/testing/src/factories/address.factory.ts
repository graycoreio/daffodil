import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoCustomerAddress } from '@daffodil/customer/driver/magento';

export class MockMagentoCustomerAddress implements MagentoCustomerAddress {
  __typename = 'CustomerAddress';
  id = faker.datatype.uuid();
  region = {
    __typename: 'CustomerAddressRegion',
    region_code: faker.address.stateAbbr(),
    region: faker.address.state(),
  };
  country_code = faker.address.countryCode();
  street = [faker.address.streetAddress()];
  company = faker.company.companyName();
  telephone = faker.phone.phoneNumber();
  postcode = faker.address.zipCode();
  city = faker.address.city();
  firstname = faker.name.firstName();
  lastname = faker.name.lastName();
  email = faker.internet.email();
}

@Injectable({
  providedIn: 'root',
})
export class MagentoCustomerAddressFactory extends DaffModelFactory<MagentoCustomerAddress> {
  constructor() {
    super(MockMagentoCustomerAddress);
  }
}
