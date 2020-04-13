import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable ,  of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffAccountRegistrationFactory,
  DaffAuthTokenFactory
} from '@daffodil/auth/testing';

import { DaffAuthEffects } from './auth.effects';
import {
  DaffAuthLogin,
  DaffAuthLoginSuccess,
  DaffAuthLoginFailure,
  DaffAuthRegister,
  DaffAuthRegisterSuccess,
  DaffAuthRegisterFailure,
  DaffAuthCheck,
  DaffAuthCheckSuccess,
  DaffAuthCheckFailure,
  DaffAuthLogout,
  DaffAuthLogoutSuccess,
  DaffAuthLogoutFailure
} from '../actions/auth.actions';
import { DaffRegisterDriver } from '../drivers/interfaces/register-service.interface';
import { DaffLoginDriver } from '../drivers/interfaces/login-service.interface';
import { DaffAccountRegistration } from '../models/account-registration';
import { DaffAuthToken } from '../models/auth-token';
import { DaffLoginInfo } from '../models/login-info';
import { DaffAuthDriver } from '../drivers/interfaces/auth-service.interface';

describe('DaffAuthEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthEffects<
    DaffLoginInfo,
    DaffAuthToken,
    DaffAccountRegistration
  >;

  let daffLoginDriver;
  let daffRegisterDriver;
  let daffAuthDriver;

  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();
  const authFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let mockAuth: DaffAuthToken;
  let mockLoginInfo: DaffLoginInfo;
  let token: string;
  let email: string;
  let password: string;
  let firstName: string;
  let lastName: string;
  let mockRegistration: DaffAccountRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffAuthEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffLoginDriver,
          useValue: jasmine.createSpyObj('DaffLoginService', ['login', 'logout'])
        },
        {
          provide: DaffRegisterDriver,
          useValue: jasmine.createSpyObj('DaffRegisterService', ['register'])
        },
        {
          provide: DaffAuthDriver,
          useValue: jasmine.createSpyObj('DaffAuthService', ['check'])
        }
      ]
    });

    effects = TestBed.get(DaffAuthEffects);

    daffLoginDriver = TestBed.get(DaffLoginDriver);
    daffRegisterDriver = TestBed.get(DaffRegisterDriver);
    daffAuthDriver = TestBed.get(DaffAuthDriver);

    mockRegistration = registrationFactory.create();
    mockAuth = authFactory.create();

    token = mockAuth.token;
    firstName = mockRegistration.customer.firstName;
    lastName = mockRegistration.customer.lastName;
    email = mockRegistration.customer.email;
    password = mockRegistration.password;
    mockLoginInfo = {email, password};
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when AuthLoginAction is triggered', () => {
    let expected;

    const mockAuthLoginAction = new DaffAuthLogin(mockLoginInfo);

    describe('and the call to AuthService is successful', () => {
      beforeEach(() => {
        daffLoginDriver.login.and.returnValue(of(mockAuth));
        const mockAuthLoginSuccessAction = new DaffAuthLoginSuccess(mockAuth);

        actions$ = hot('--a', { a: mockAuthLoginAction });
        expected = cold('--b', { b: mockAuthLoginSuccessAction });
      });

      it('should dispatch a AuthLoginSuccess action', () => {
        expect(effects.login$).toBeObservable(expected);
      });
    });

    describe('and the call to AuthService fails', () => {
      beforeEach(() => {
        const error = 'Failed to log in';
        const response = cold('#', {}, error);
        daffLoginDriver.login.and.returnValue(response);
        const mockAuthLoginFailureAction = new DaffAuthLoginFailure(error);

        actions$ = hot('--a', { a: mockAuthLoginAction });
        expected = cold('--b', { b: mockAuthLoginFailureAction });
      });

      it('should dispatch a AuthLoginFailure action', () => {
        expect(effects.login$).toBeObservable(expected);
      });
    });
  });

  describe('when AuthCheckAction is triggered', () => {
    let expected;

    const mockAuthCheckAction = new DaffAuthCheck();

    describe('and the call to AuthService is successful', () => {
      beforeEach(() => {
        daffAuthDriver.check.and.returnValue(of(undefined));
        const mockAuthCheckSuccessAction = new DaffAuthCheckSuccess();

        actions$ = hot('--a', { a: mockAuthCheckAction });
        expected = cold('--b', { b: mockAuthCheckSuccessAction });
      });

      it('should dispatch a AuthCheckSuccess action', () => {
        expect(effects.check$).toBeObservable(expected);
      });
    });

    describe('and the call to AuthService fails', () => {
      beforeEach(() => {
        const error = 'Auth token is not valid';
        const response = cold('#', {}, error);
        daffAuthDriver.check.and.returnValue(response);
        const mockAuthCheckFailureAction = new DaffAuthCheckFailure(error);

        actions$ = hot('--a', { a: mockAuthCheckAction });
        expected = cold('--b', { b: mockAuthCheckFailureAction });
      });

      it('should dispatch a AuthCheckFailure action', () => {
        expect(effects.check$).toBeObservable(expected);
      });
    });
  });

  describe('when AuthLogoutAction is triggered', () => {
    let expected;

    const mockAuthLogoutAction = new DaffAuthLogout();

    describe('and the call to AuthService is successful', () => {
      beforeEach(() => {
        daffLoginDriver.logout.and.returnValue(of(mockAuth));
        const mockAuthLogoutSuccessAction = new DaffAuthLogoutSuccess();

        actions$ = hot('--a', { a: mockAuthLogoutAction });
        expected = cold('--b', { b: mockAuthLogoutSuccessAction });
      });

      it('should dispatch a AuthLogoutSuccess action', () => {
        expect(effects.logout$).toBeObservable(expected);
      });
    });

    describe('and the call to AuthService fails', () => {
      beforeEach(() => {
        const error = 'Failed to log out';
        const response = cold('#', {}, error);
        daffLoginDriver.logout.and.returnValue(response);
        const mockAuthLogoutFailureAction = new DaffAuthLogoutFailure(error);

        actions$ = hot('--a', { a: mockAuthLogoutAction });
        expected = cold('--b', { b: mockAuthLogoutFailureAction });
      });

      it('should dispatch a AuthLogoutFailure action', () => {
        expect(effects.logout$).toBeObservable(expected);
      });
    });
  });

  describe('when AuthRegisterAction is triggered', () => {
    let expected;

    const mockAuthRegisterAction = new DaffAuthRegister(mockRegistration);

    describe('and the call to AuthService is successful', () => {
      beforeEach(() => {
        daffRegisterDriver.register.and.returnValue(of(mockLoginInfo));
        const mockAuthRegisterSuccessAction = new DaffAuthRegisterSuccess(mockLoginInfo);

        actions$ = hot('--a', { a: mockAuthRegisterAction });
        expected = cold('--b', { b: mockAuthRegisterSuccessAction });
      });

      it('should dispatch a AuthRegisterSuccess action', () => {
        expect(effects.register$).toBeObservable(expected);
      });
    });

    describe('and the call to AuthService fails', () => {
      beforeEach(() => {
        const error = 'Failed to register a new user';
        const response = cold('#', {}, error);
        daffRegisterDriver.register.and.returnValue(response);
        const mockAuthLoginFailureAction = new DaffAuthRegisterFailure(error);

        actions$ = hot('--a', { a: mockAuthRegisterAction });
        expected = cold('--b', { b: mockAuthLoginFailureAction });
      });

      it('should dispatch a AuthRegisterFailure action', () => {
        expect(effects.register$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffAuthRegisterSuccess is triggered', () => {
    let expected;

    const mockAuthLoginAction = new DaffAuthLogin(mockLoginInfo);
    const mockAuthRegisterSuccessAction = new DaffAuthRegisterSuccess(mockLoginInfo);

    beforeEach(() => {
      actions$ = hot('--a', { a: mockAuthRegisterSuccessAction });
      expected = cold('--b', { b: mockAuthLoginAction });
    });

    it('should dispatch a AuthRegisterSuccess action', () => {
      expect(effects.loginAfterRegister$).toBeObservable(expected);
    });
  });
});
