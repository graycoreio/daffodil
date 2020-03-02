import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { MagentoCartAddressInput } from '@daffodil/cart';

import { DaffModelFactory } from '@daffodil/core/testing';

export class MockMagentoCartAddressInput implements MagentoCartAddressInput {
  region = faker.address.stateAbbr();
  country_code = faker.address.countryCode();
  street = [faker.address.streetAddress()];
  company = faker.company.companyName();
  telephone = faker.phone.phoneNumber();
  postcode = faker.address.zipCode();
  city = faker.address.city();
  firstname = faker.name.firstName();
  lastname = faker.name.lastName();
  save_in_address_book = faker.random.boolean();
}

@Injectable({
  providedIn: 'root'
})
export class MagentoCartAddressInputFactory extends DaffModelFactory<MagentoCartAddressInput> {
  constructor() {
    super(MockMagentoCartAddressInput);
  }
}
