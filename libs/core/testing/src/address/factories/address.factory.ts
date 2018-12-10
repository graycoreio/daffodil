import { Injectable } from '@angular/core';
import { DaffodilAddress } from '@daffodil/core';

import * as faker from 'faker/locale/en_US';
import { ModelFactory } from '../../factories/factory';

export class MockDaffodilAddress implements DaffodilAddress {
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
export class DaffAddressFactory extends ModelFactory<DaffodilAddress>{
  constructor(){
    super(MockDaffodilAddress);
  }
}
