import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { MagentoCartAddress } from '@daffodil/cart';

import { DaffModelFactory } from '@daffodil/core/testing';

export class MockMagentoCartAddress implements MagentoCartAddress {
  region = {
    code: faker.address.stateAbbr(),
    label: faker.address.state()
  };
  country = {
    code: faker.address.countryCode(),
    label: faker.address.country()
  };
  street = [faker.address.streetAddress()];
  company = faker.company.companyName();
  telephone = faker.phone.phoneNumber();
  postcode = faker.address.zipCode();
  city = faker.address.city();
  firstname = faker.name.firstName();
  lastname = faker.name.lastName();
}

@Injectable({
  providedIn: 'root'
})
export class MagentoCartAddressFactory extends DaffModelFactory<MagentoCartAddress> {
  constructor() {
    super(MockMagentoCartAddress);
  }
}
