import { TestBed } from '@angular/core/testing';

import {
  DaffLoginRequest,
  DaffLoginResponse,
  DaffLoginServiceInterface,
  DaffAccountRegistration
} from '@daffodil/auth';

import { DaffTestingLoginService } from './login.service';
import { DaffAccountRegistrationFactory } from '../../../factories/account-registration.factory';

describe('Driver | Testing | Auth | LoginService', () => {
  let loginService: DaffLoginServiceInterface<DaffLoginRequest, DaffLoginResponse>;

  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();

  let email: string;
  let password: string;
  let mockRegistration: DaffAccountRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingLoginService
      ]
    });

    loginService = TestBed.get(DaffTestingLoginService);

    mockRegistration = registrationFactory.create();

    email = mockRegistration.customer.email;
    password = mockRegistration.password;
  });

  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });

  describe('login', () => {
    it('should return a token', () => {
      loginService.login({email, password}).subscribe(auth => {
        expect(auth).toBeTruthy();
      })
    });
  });
});
