import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffCartAddress } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCartAddress implements DaffCartAddress {
  id = faker.datatype.uuid();
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
  postcode = 'postcode';
  country_id = 'ISO';
  telephone = '+1 (123)-123-1234';
}

@Injectable({
  providedIn: 'root',
})
export class DaffCartAddressFactory extends DaffModelFactory<DaffCartAddress> {

  constructor(){
    super(MockCartAddress);
  }
}
