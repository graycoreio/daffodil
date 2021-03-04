import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffAddress } from '@daffodil/geography';


export class MockDaffAddress implements DaffAddress {
  street = faker.address.streetName();
  street2 = faker.address.secondaryAddress();
  city = faker.address.city();
  region = faker.address.stateAbbr();
  postcode = faker.address.zipCode();
  country = faker.address.zipCode();
}

@Injectable({
  providedIn: 'root',
})
export class DaffAddressFactory extends DaffModelFactory<DaffAddress>{
  constructor(){
    super(MockDaffAddress);
  }
}
