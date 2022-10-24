import { TestBed } from '@angular/core/testing';

import {
  DaffLoginInfo,
  DaffAuthToken,
  DaffAccountRegistration,
} from '@daffodil/auth';
import { DaffLoginServiceInterface } from '@daffodil/auth/driver';
import { DaffAccountRegistrationFactory } from '@daffodil/auth/testing';

import { DaffTestingLoginService } from './login.service';

describe('@daffodil/auth/driver/testing | DaffTestingLoginService', () => {
  let loginService: DaffLoginServiceInterface<DaffLoginInfo, DaffAuthToken>;

  let registrationFactory: DaffAccountRegistrationFactory;

  let email: string;
  let password: string;
  let mockRegistration: DaffAccountRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingLoginService,
      ],
    });

    loginService = TestBed.inject(DaffTestingLoginService);
    registrationFactory = TestBed.inject(DaffAccountRegistrationFactory);

    mockRegistration = registrationFactory.create();

    email = mockRegistration.email;
    password = mockRegistration.password;
  });

  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });

  describe('login | obtaining a token', () => {
    it('should return a token', done => {
      loginService.login({ email, password }).subscribe(auth => {
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
