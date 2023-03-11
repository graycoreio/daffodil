import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffAddress } from '@daffodil/core';

import { DaffModelFactory } from './factory';

/**
 * @deprecated
 * Prefer the `MockDaffAddress` of daffodil/geography/testing`
 */
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

/**
 * @deprecated
 * Prefer the `DaffAddressFactory` of `daffodil/geography/testing`
 */
@Injectable({
  providedIn: 'root',
})
export class DaffAddressFactory extends DaffModelFactory<DaffAddress>{
  constructor(){
    super(MockDaffAddress);
  }
}
