import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffModelFactory,
  enforceUnique,
} from '@daffodil/core/testing';
import { MagentoOrderAddress } from '@daffodil/order/driver/magento/2-4-1';

export class MockOrderAddress implements MagentoOrderAddress {
  __typename = <const>'OrderAddress';
  street = [faker.location.street()];
  city = faker.location.city();
  region_id = enforceUnique(faker.number.int);
  region_code = faker.location.state({ abbreviated: true });
  postcode = faker.location.zipCode();
  country = faker.location.countryCode();
  country_code = faker.location.countryCode();
  prefix = faker.person.prefix();
  suffix = faker.person.suffix();
  firstname = faker.person.firstName();
  middlename = faker.person.firstName();
  lastname = faker.person.lastName();
  telephone = faker.phone.number();
  fax = faker.phone.number();
  company = faker.company.name();
}

@Injectable({
  providedIn: 'root',
})
export class MagentoOrderAddressFactory extends DaffModelFactory<MagentoOrderAddress> {
  constructor() {
    super(MockOrderAddress);
  }
}
