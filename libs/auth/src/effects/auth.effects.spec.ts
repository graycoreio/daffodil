import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable ,  of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffTestingLoginService,
  DaffTestingRegisterService,
  DaffAccountRegistrationFactory,
  DaffAuthFactory
} from '@daffodil/auth/testing';

import { DaffAuthEffects } from './auth.effects';
import {
  DaffAuthLogin,
  DaffAuthLoginSuccess,
  DaffAuthLoginFailure,
  DaffAuthRegister,
  DaffAuthRegisterSuccess,
  DaffAuthRegisterFailure
} from '../actions/auth.actions';
import { DaffRegisterDriver } from '../drivers/injection-tokens/register-driver.token';
import { DaffRegisterServiceInterface } from '../drivers/interfaces/register-service.interface';
import { DaffLoginDriver } from '../drivers/injection-tokens/login-driver.token';
import { DaffLoginServiceInterface } from '../drivers/interfaces/login-service.interface';
import { DaffAccountRegistration } from '../models/account-registration';
import { DaffRegisterRequest } from '../models/register-request';
import { DaffRegisterResponse } from '../models/register-response';
import { DaffLoginRequest } from '../models/login-request';
import { DaffLoginResponse } from '../models/login-response';
import { DaffAuth } from '../models/auth';

describe('DaffAuthEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthEffects<
    DaffLoginRequest,
    DaffLoginResponse,
    DaffRegisterRequest,
    DaffRegisterResponse
  >;

  let daffLoginDriver: DaffLoginServiceInterface<DaffLoginRequest, DaffLoginResponse>;
  let daffRegisterDriver: DaffRegisterServiceInterface<DaffRegisterRequest, DaffRegisterResponse>;

  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();
  const authFactory: DaffAuthFactory = new DaffAuthFactory();

  let mockAuth: DaffAuth;
  let mockLoginInfo: DaffLoginRequest;
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
          useValue: new DaffTestingLoginService()
        },
        {
          provide: DaffRegisterDriver,
          useValue: new DaffTestingRegisterService()
        },
      ]
    });

    effects = TestBed.get(DaffAuthEffects);

    daffLoginDriver = TestBed.get(DaffLoginDriver);
    daffRegisterDriver = TestBed.get(DaffRegisterDriver);

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
        spyOn(daffLoginDriver, 'login').and.returnValue(of(mockAuth));
        const mockAuthLoadSuccessAction = new DaffAuthLoginSuccess(mockAuth);

        actions$ = hot('--a', { a: mockAuthLoginAction });
        expected = cold('--b', { b: mockAuthLoadSuccessAction });
      });

      it('should dispatch a AuthLoginSuccess action', () => {
        expect(effects.login$).toBeObservable(expected);
      });
    });

    describe('and the call to AuthService fails', () => {

      beforeEach(() => {
        const error = 'Failed to log in';
        const response = cold('#', {}, error);
        spyOn(daffLoginDriver, 'login').and.returnValue(response);
        const mockAuthLoadFailureAction = new DaffAuthLoginFailure(error);

        actions$ = hot('--a', { a: mockAuthLoginAction });
        expected = cold('--b', { b: mockAuthLoadFailureAction });
      });

      it('should dispatch a AuthLoginFailure action', () => {
        expect(effects.login$).toBeObservable(expected);
      });
    });
  });

  describe('when AuthRegisterAction is triggered', () => {
    let expected;

    const mockAuthLoginAction = new DaffAuthRegister(mockRegistration);

    describe('and the call to AuthService is successful', () => {
      beforeEach(() => {
        spyOn(daffRegisterDriver, 'register').and.returnValue(of(mockAuth));
        const mockAuthLoadSuccessAction = new DaffAuthRegisterSuccess(mockAuth);

        actions$ = hot('--a', { a: mockAuthLoginAction });
        expected = cold('--b', { b: mockAuthLoadSuccessAction });
      });

      it('should dispatch a AuthRegisterSuccess action', () => {
        expect(effects.register$).toBeObservable(expected);
      });
    });

    describe('and the call to AuthService fails', () => {
      beforeEach(() => {
        const error = 'Failed to register a new user';
        const response = cold('#', {}, error);
        spyOn(daffRegisterDriver, 'register').and.returnValue(response);
        const mockAuthLoadFailureAction = new DaffAuthRegisterFailure(error);

        actions$ = hot('--a', { a: mockAuthLoginAction });
        expected = cold('--b', { b: mockAuthLoadFailureAction });
      });

      it('should dispatch a AuthRegisterFailure action', () => {
        expect(effects.register$).toBeObservable(expected);
      });
    });
  });
});
