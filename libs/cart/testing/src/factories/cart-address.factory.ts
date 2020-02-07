import { Injectable } from '@angular/core';

import { DaffCartAddress } from '@daffodil/cart';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCartAddress implements DaffCartAddress {
  address_id = faker.random.number(1000);
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
  region_id = faker.random.number(1000);
  postcode = 'postcode';
  country_id = 'ISO';
  telephone = '+1 (123)-123-1234';
}

@Injectable({
  providedIn: 'root'
})
export class DaffCartAddressFactory extends DaffModelFactory<DaffCartAddress> {
  
  constructor(){
    super(MockCartAddress);
  }
}