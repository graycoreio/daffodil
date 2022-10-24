import { TestBed } from '@angular/core/testing';

import { DaffAuthResetPasswordInfo } from '@daffodil/auth';

import { DaffAuthResetPasswordInfoFactory } from './reset-password-info.factory';

describe('@daffodil/auth/testing | DaffAuthResetPasswordInfoFactory', () => {
  let accountRegistrationFactory: DaffAuthResetPasswordInfoFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffAuthResetPasswordInfoFactory],
    });

    accountRegistrationFactory = TestBed.inject(DaffAuthResetPasswordInfoFactory);
  });

  it('should be created', () => {
    expect(accountRegistrationFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffAuthResetPasswordInfo;

    beforeEach(() => {
      result = accountRegistrationFactory.create();
    });

    it('should return an AccountRegistration with all required fields defined', () => {
      expect(result.email).toBeDefined();
      expect(result.password).toBeDefined();
      expect(result.token).toBeDefined();
    });
  });
});
