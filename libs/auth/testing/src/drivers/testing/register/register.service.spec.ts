import { TestBed } from '@angular/core/testing';

import {
  DaffLoginInfo,
  DaffRegisterServiceInterface,
  DaffAccountRegistration,
  DaffCustomerRegistration,
} from '@daffodil/auth';

import { DaffAccountRegistrationFactory } from '../../../factories/account-registration.factory';
import { DaffTestingRegisterService } from './register.service';

describe('Driver | Testing | Auth | RegisterService', () => {
  let registerService: DaffRegisterServiceInterface<
    DaffAccountRegistration,
    DaffLoginInfo
  >;

  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();

  let mockRegistration: DaffAccountRegistration;
  let mockLoginInfo: DaffLoginInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingRegisterService,
      ],
    });

    registerService = TestBed.inject(DaffTestingRegisterService);

    mockRegistration = registrationFactory.create();

    mockLoginInfo = {
      email: mockRegistration.customer.email,
      password: mockRegistration.password,
    };
  });

  it('should be created', () => {
    expect(registerService).toBeTruthy();
  });

  describe('register | obtaining login info', () => {
    it('should return login info', () => {
      registerService.register(mockRegistration).subscribe(loginInfo => {
        expect(loginInfo).toEqual(mockLoginInfo);
      });
    });
  });
});
