import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { MagentoCartAddressInput } from '@daffodil/cart/driver/magento';
import {
  DaffModelFactory,
  enforceUnique,
} from '@daffodil/core/testing';

export class MockMagentoCartAddressInput implements MagentoCartAddressInput {
  region_id = enforceUnique(faker.number.int);
  country_code = faker.location.countryCode();
  street = [faker.location.streetAddress()];
  company = faker.company.name();
  telephone = faker.phone.number();
  postcode = faker.location.zipCode();
  city = faker.location.city();
  firstname = faker.name.firstName();
  lastname = faker.name.lastName();
  save_in_address_book = faker.datatype.boolean();
}

@Injectable({
  providedIn: 'root',
})
export class MagentoCartAddressInputFactory extends DaffModelFactory<MagentoCartAddressInput> {
  constructor() {
    super(MockMagentoCartAddressInput);
  }
}
