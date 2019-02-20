import { Injectable } from "@angular/core";

import * as faker from 'faker/locale/en_US';

import { OrderAddress } from "@daffodil/checkout";
import { ModelFactory } from "@daffodil/core/testing";

export class MockOrderAddress implements OrderAddress {
  address_id = faker.random.number(1000);
  quote_id = faker.random.number(1000);
  created_at = new Date();
  updated_at = new Date();
  customer_id = faker.random.number(1000);
  customer_address_id = faker.random.number(1000);
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
  telephone = 'telephone';
  fax = 'fax';
  shipping_method = 'swallow';
  shipping_description = 'flight';
  shipping_rate = null;
}

@Injectable({
  providedIn: 'root'
})
export class DaffOrderAddressFactory extends ModelFactory<OrderAddress> {
  
  constructor(){
    super(MockOrderAddress);
  }
}