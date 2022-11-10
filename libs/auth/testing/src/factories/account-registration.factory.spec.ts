import { TestBed } from '@angular/core/testing';

import { DaffAccountRegistration } from '@daffodil/auth';

import { DaffAccountRegistrationFactory } from './account-registration.factory';

describe('@daffodil/auth/testing | DaffAccountRegistrationFactory', () => {
  let accountRegistrationFactory: DaffAccountRegistrationFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffAccountRegistrationFactory],
    });

    accountRegistrationFactory = TestBed.inject(DaffAccountRegistrationFactory);
  });

  it('should be created', () => {
    expect(accountRegistrationFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffAccountRegistration;

    beforeEach(() => {
      result = accountRegistrationFactory.create();
    });

    it('should return an AccountRegistration with all required fields defined', () => {
      expect(result.email).toBeDefined();
      expect(result.password).toBeDefined();
      expect(result.subscribe).toBeDefined();
      expect(result.firstName).toBeDefined();
      expect(result.lastName).toBeDefined();
    });
  });
});
