import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoOrderAddress } from '@daffodil/order/driver/magento/2.4.1';

export class MockOrderAddress implements MagentoOrderAddress {
  __typename: 'OrderAddress' = 'OrderAddress';
  street = [faker.address.streetName()];
  city = faker.address.city();
  region_id = faker.unique(faker.datatype.number);
  region_code = faker.address.stateAbbr();
  postcode = faker.address.zipCode();
  country = faker.address.countryCode();
  country_code = faker.address.countryCode();
  prefix = faker.name.prefix();
  suffix = faker.name.suffix();
  firstname = faker.name.firstName();
  middlename = faker.name.firstName();
  lastname = faker.name.lastName();
  telephone = faker.phone.phoneNumber();
  fax = faker.phone.phoneNumber();
  company = faker.company.companyName();
}

@Injectable({
  providedIn: 'root',
})
export class MagentoOrderAddressFactory extends DaffModelFactory<MagentoOrderAddress> {
  constructor() {
    super(MockOrderAddress);
  }
}
