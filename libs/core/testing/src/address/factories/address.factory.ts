import { Injectable } from '@angular/core';
import { DaffAddress } from '@daffodil/core';

import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '../../factories/factory';

export class MockDaffAddress implements DaffAddress {
  firstname = faker.name.firstName();
  lastname = faker.name.lastName();
  street = faker.address.streetName();
  city = faker.address.city();
  state = faker.address.stateAbbr();
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
