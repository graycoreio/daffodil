import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { MagentoCartAddress } from '@daffodil/cart/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockMagentoCartAddress implements MagentoCartAddress {
  __typename = 'BillingCartAddress';
  region = {
    __typename: 'CartAddressRegion',
    region_id: faker.unique(faker.datatype.number),
    code: faker.address.stateAbbr(),
  };
  country = {
    __typename: 'CartAddressCountry',
    code: faker.address.countryCode(),
    label: faker.address.country(),
  };
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
export class MagentoCartAddressFactory extends DaffModelFactory<MagentoCartAddress> {
  constructor() {
    super(MockMagentoCartAddress);
  }
}
