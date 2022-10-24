import { TestBed } from '@angular/core/testing';

import {
  DaffLoginInfo,
  DaffAccountRegistration,
} from '@daffodil/auth';
import { DaffRegisterServiceInterface } from '@daffodil/auth/driver';
import { DaffAccountRegistrationFactory } from '@daffodil/auth/testing';

import { DaffTestingRegisterService } from './register.service';

describe('@daffodil/auth/driver/testing | DaffTestingRegisterService', () => {
  let registerService: DaffRegisterServiceInterface;

  let registrationFactory: DaffAccountRegistrationFactory;

  let mockRegistration: DaffAccountRegistration;
  let mockLoginInfo: DaffLoginInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingRegisterService,
      ],
    });

    registerService = TestBed.inject(DaffTestingRegisterService);
    registrationFactory = TestBed.inject(DaffAccountRegistrationFactory);

    mockRegistration = registrationFactory.create();

    mockLoginInfo = {
      email: mockRegistration.email,
      password: mockRegistration.password,
    };
  });

  it('should be created', () => {
    expect(registerService).toBeTruthy();
  });

  describe('register | obtaining login info', () => {
    it('should return login info', done => {
      registerService.register(mockRegistration).subscribe(loginInfo => {
        done();
      });
    });
  });
});
