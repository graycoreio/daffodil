import { TestBed } from '@angular/core/testing';

import {
  DaffLoginInfo,
  DaffAuthToken,
  DaffLoginServiceInterface,
  DaffAccountRegistration,
} from '@daffodil/auth';

import { DaffTestingLoginService } from './login.service';
import { DaffAccountRegistrationFactory } from '../../../factories/account-registration.factory';

describe('Driver | Testing | Auth | LoginService', () => {
  let loginService: DaffLoginServiceInterface<DaffLoginInfo, DaffAuthToken>;

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

  describe('login | obtaining a token', () => {
    it('should return a token', done => {
      loginService.login({email, password}).subscribe(auth => {
        expect(auth.token).toBeTruthy();
        done();
      });
    });
  });

  describe('logout | emitting undefined without error', () => {
    it('should emit undefined without throwing an error', done => {
      loginService.logout().subscribe(auth => {
        expect(auth).toBeUndefined();
        done();
      });
    });
  });
});
