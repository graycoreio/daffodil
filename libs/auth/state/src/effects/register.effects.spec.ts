import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable ,
  of,
} from 'rxjs';

import {
  DaffLoginInfo,
  DaffAuthToken,
  DaffAccountRegistration,
  DaffAuthStorageService,
} from '@daffodil/auth';
import {
  DaffAuthInvalidAPIResponseError,
  DaffRegisterDriver,
  DaffRegisterServiceInterface,
} from '@daffodil/auth/driver';
import {
  DaffAuthRegister,
  DaffAuthRegisterSuccess,
  DaffAuthRegisterFailure,
} from '@daffodil/auth/state';
import {
  DaffAccountRegistrationFactory,
  DaffAuthTokenFactory,
} from '@daffodil/auth/testing';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

import { DaffAuthRegisterEffects } from './register.effects';

describe('@daffodil/auth/state | DaffAuthRegisterEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthRegisterEffects;

  let daffRegisterDriver: jasmine.SpyObj<DaffRegisterServiceInterface>;
  let daffAuthStorageService: DaffAuthStorageService;

  let registrationFactory: DaffAccountRegistrationFactory;
  const authFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let mockAuth: DaffAuthToken;
  let mockLoginInfo: DaffLoginInfo;
  let token: string;
  let email: string;
  let password: string;
  let mockRegistration: DaffAccountRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffAuthRegisterEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffRegisterDriver,
          useValue: jasmine.createSpyObj('DaffRegisterService', ['register']),
        },
      ],
    });

    effects = TestBed.inject(DaffAuthRegisterEffects);

    daffRegisterDriver = TestBed.inject<jasmine.SpyObj<DaffRegisterServiceInterface>>(DaffRegisterDriver);
    registrationFactory = TestBed.inject(DaffAccountRegistrationFactory);

    mockRegistration = registrationFactory.create();
    mockAuth = authFactory.create();

    token = mockAuth.token;
    email = mockRegistration.email;
    password = mockRegistration.password;
    mockLoginInfo = { email, password };
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('register$ | when the user registers an account', () => {
    let expected;

    const mockAuthRegisterAction = new DaffAuthRegister(mockRegistration);

    describe('and the registration is successful', () => {
      beforeEach(() => {
        daffRegisterDriver.register.and.returnValue(of(undefined));
        const mockAuthRegisterSuccessAction = new DaffAuthRegisterSuccess();

        actions$ = hot('--a', { a: mockAuthRegisterAction });
        expected = cold('--b', { b: mockAuthRegisterSuccessAction });
      });

      it('should notify state that the registration succeeded', () => {
        expect(effects.register$).toBeObservable(expected);
      });
    });

    describe('and the registration fails', () => {
      beforeEach(() => {
        const error = new DaffAuthInvalidAPIResponseError('Failed to register a new user');
        const response = cold('#', {}, error);
        daffRegisterDriver.register.and.returnValue(response);
        const mockAuthLoginFailureAction = new DaffAuthRegisterFailure(daffTransformErrorToStateError(error));

        actions$ = hot('--a', { a: mockAuthRegisterAction });
        expected = cold('--b', { b: mockAuthLoginFailureAction });
      });

      it('should notify state that the registration failed', () => {
        expect(effects.register$).toBeObservable(expected);
      });
    });
  });
});
