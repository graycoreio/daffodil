import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffAddress } from '@daffodil/geography';

import * as faker from 'faker/locale/en_US';

export class MockDaffAddress implements DaffAddress {
  firstname = faker.name.firstName();
  lastname = faker.name.lastName();
  street = faker.address.streetName();
  city = faker.address.city();
  region = faker.address.stateAbbr();
  email = faker.internet.email();
  postcode = faker.address.zipCode();
  telephone = faker.phone.phoneNumber();
}

@Injectable({
  providedIn: 'root'
})
export class DaffAddressFactory extends DaffModelFactory<DaffAddress>{
  constructor(){
    super(MockDaffAddress);
  }
}
