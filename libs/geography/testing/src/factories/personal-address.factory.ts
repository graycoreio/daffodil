import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPersonalAddress } from '@daffodil/geography';

import { MockDaffAddress } from './address.factory';

export class MockDaffPersonalAddress extends MockDaffAddress implements DaffPersonalAddress {
  prefix = faker.person.prefix();
  suffix = faker.person.suffix();
  firstname = faker.person.firstName();
  middlename = faker.person.firstName();
  lastname = faker.person.lastName();
  email = faker.internet.email();
  telephone = faker.phone.number();
}

@Injectable({
  providedIn: 'root',
})
export class DaffPersonalAddressFactory extends DaffModelFactory<DaffPersonalAddress>{
  constructor() {
    super(MockDaffPersonalAddress);
  }
}
