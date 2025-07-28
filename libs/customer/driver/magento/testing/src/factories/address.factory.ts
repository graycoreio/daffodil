import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffModelFactory,
  enforceUnique,
} from '@daffodil/core/testing';
import { MagentoCustomerAddress } from '@daffodil/customer/driver/magento';

export class MockMagentoCustomerAddress implements MagentoCustomerAddress {
  __typename = 'CustomerAddress';
  id = enforceUnique(faker.number.int);
  region = {
    __typename: 'CustomerAddressRegion',
    region_code: faker.location.state({ abbreviated: true }),
    region_id: enforceUnique(faker.number.int),
  };
  country_code = faker.location.countryCode();
  street = [faker.location.streetAddress()];
  company = faker.company.name();
  telephone = faker.phone.number();
  postcode = faker.location.zipCode();
  city = faker.location.city();
  firstname = faker.person.firstName();
  lastname = faker.person.lastName();
  email = faker.internet.email();
  default_billing = faker.datatype.boolean();
  default_shipping = faker.datatype.boolean();
}

@Injectable({
  providedIn: 'root',
})
export class MagentoCustomerAddressFactory extends DaffModelFactory<MagentoCustomerAddress> {
  constructor() {
    super(MockMagentoCustomerAddress);
  }
}
