import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockAuthResetPasswordInfo implements DaffAuthResetPasswordInfo {
  email = faker.internet.email();
  password = faker.string.alphanumeric(16);
  token = faker.string.alphanumeric(16);
};

@Injectable({
  providedIn: 'root',
})
export class DaffAuthResetPasswordInfoFactory extends DaffModelFactory<DaffAuthResetPasswordInfo> {
  constructor() {
    super(MockAuthResetPasswordInfo);
  }
}
