import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPersonalAddress } from '@daffodil/geography';

import { MockDaffAddress } from './address.factory';

export class MockDaffPersonalAddress extends MockDaffAddress implements DaffPersonalAddress {
  prefix = faker.name.prefix();
  suffix = faker.name.suffix();
  firstname = faker.name.firstName();
  middlename = faker.name.firstName();
  lastname = faker.name.lastName();
  email = faker.internet.email();
  telephone = faker.phone.phoneNumber();
}

@Injectable({
  providedIn: 'root'
})
export class DaffPersonalAddressFactory extends DaffModelFactory<DaffPersonalAddress>{
  constructor() {
    super(MockDaffPersonalAddress);
  }
}
