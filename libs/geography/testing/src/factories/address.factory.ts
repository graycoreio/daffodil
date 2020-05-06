import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffAddress } from '@daffodil/geography';

import * as faker from 'faker/locale/en_US';

export class MockDaffAddress implements DaffAddress {
  street = faker.address.streetName();
  city = faker.address.city();
  region = faker.address.stateAbbr();
  postcode = faker.address.zipCode();
}

@Injectable({
  providedIn: 'root'
})
export class DaffAddressFactory extends DaffModelFactory<DaffAddress>{
  constructor(){
    super(MockDaffAddress);
  }
}
