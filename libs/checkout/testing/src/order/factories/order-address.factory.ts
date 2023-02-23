import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffOrderAddress } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';

/**
 * @deprecated
 */
export class MockOrderAddress implements DaffOrderAddress {
  address_id = faker.datatype.number({ min: 1, max: 1000 });
  quote_id = faker.datatype.number({ min: 1, max: 1000 });
  created_at = new Date();
  updated_at = new Date();
  customer_id = faker.datatype.number({ min: 1, max: 1000 });
  customer_address_id = faker.datatype.number({ min: 1, max: 1000 });
  address_type = 'apartment';
  email = 'email@email.com';
  prefix = 'prefix';
  firstname = 'first';
  middlename = 'middle';
  lastname = 'last';
  suffix = 'suffix';
  company = 'company';
  street = 'street';
  city = 'city';
  state = 'state';
  region = 'region';
  region_id = faker.datatype.uuid();
  postcode = 'postcode';
  country_id = 'ISO';
  telephone = 'telephone';
  fax = 'fax';
  shipping_method = 'swallow';
  shipping_description = 'flight';
  shipping_rate = null;
}

/**
 * @deprecated
 */
@Injectable({
  providedIn: 'root',
})
export class DaffOrderAddressFactory extends DaffModelFactory<DaffOrderAddress> {

  constructor(){
    super(MockOrderAddress);
  }
}
