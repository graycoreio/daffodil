import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { MagentoCartAddress } from '@daffodil/cart/driver/magento';
import {
  DaffModelFactory,
  enforceUnique,
} from '@daffodil/core/testing';

export class MockMagentoCartAddress implements MagentoCartAddress {
  __typename = 'BillingCartAddress';
  customer_address_id = enforceUnique(faker.number.int);
  region = {
    __typename: 'CartAddressRegion',
    region_id: enforceUnique(faker.number.int),
    code: faker.location.state({ abbreviated: true }),
  };
  country = {
    __typename: 'CartAddressCountry',
    code: faker.location.countryCode(),
    label: faker.location.country(),
  };
  street = [faker.location.streetAddress()];
  company = faker.company.name();
  telephone = faker.phone.number();
  postcode = faker.location.zipCode();
  city = faker.location.city();
  firstname = faker.name.firstName();
  lastname = faker.name.lastName();
  email = faker.internet.email();
}

@Injectable({
  providedIn: 'root',
})
export class MagentoCartAddressFactory extends DaffModelFactory<MagentoCartAddress> {
  constructor() {
    super(MockMagentoCartAddress);
  }
}
