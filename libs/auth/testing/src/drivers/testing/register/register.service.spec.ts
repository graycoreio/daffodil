import { TestBed } from '@angular/core/testing';

import {
  DaffAuthToken,
  DaffRegisterServiceInterface,
  DaffAccountRegistration,
  DaffCustomerRegistration
} from '../../../../../src';
import { DaffTestingRegisterService } from './register.service';
import { DaffAccountRegistrationFactory } from '../../../factories/account-registration.factory';

describe('Driver | Testing | Auth | RegisterService', () => {
  let registerService: DaffRegisterServiceInterface<
    DaffAccountRegistration,
    DaffAuthToken
  >;

  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();

  let mockRegistration: DaffAccountRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingRegisterService
      ]
    });

    registerService = TestBed.get(DaffTestingRegisterService);

    mockRegistration = registrationFactory.create();
  });

  it('should be created', () => {
    expect(registerService).toBeTruthy();
  });

  describe('register | obtaining a token', () => {
    it('should return a token', () => {
      registerService.register(mockRegistration).subscribe(auth => {
        expect(auth.token).toBeTruthy();
      });
    });
  });
});
