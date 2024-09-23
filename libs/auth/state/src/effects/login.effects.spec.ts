import {
  flush,
  TestBed,
} from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffLoginInfo,
  DaffAuthToken,
  DaffAccountRegistration,
  DaffAuthStorageService,
} from '@daffodil/auth';
import {
  DaffLoginDriver,
  DaffLoginServiceInterface,
  DaffAuthenticationFailedError,
  DaffAuthInvalidAPIResponseError,
} from '@daffodil/auth/driver';
import {
  DaffAuthStorageFailure,
  DaffAuthLogin,
  DaffAuthLoginSuccess,
  DaffAuthLoginFailure,
  DaffAuthLogout,
  DaffAuthLogoutSuccess,
  DaffAuthLogoutFailure,
  DaffAuthServerSide,
} from '@daffodil/auth/state';
import {
  DaffAccountRegistrationFactory,
  DaffAuthTokenFactory,
} from '@daffodil/auth/testing';
import {
  DaffServerSideStorageError,
  DaffStorageServiceError,
} from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

import { DaffAuthLoginEffects } from './login.effects';

export interface LoginTestState {
  didLoginSucceed: boolean;
  whatDriverErrorWasThrown?: unknown;
  didTokenStorageSucceed?: boolean;
  whatStorageErrorWasThrown?: any | undefined;
  whatActionWasReturned?: Action;
  whatWasTheValueOfTheStoredToken?: string | undefined;
};

fdescribe('@daffodil/auth/state | DaffAuthLoginEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthLoginEffects;

  let daffLoginDriver: jasmine.SpyObj<DaffLoginServiceInterface>;
  let daffAuthStorageService: DaffAuthStorageService;
  let setAuthTokenSpy: jasmine.Spy<DaffAuthStorageService['setAuthToken']>;
  let removeAuthTokenSpy: jasmine.Spy<DaffAuthStorageService['removeAuthToken']>;

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
        DaffAuthLoginEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffLoginDriver,
          useValue: jasmine.createSpyObj('DaffLoginService', ['login', 'logout']),
        },
      ],
    });

    effects = TestBed.inject(DaffAuthLoginEffects);

    daffLoginDriver = TestBed.inject<jasmine.SpyObj<DaffLoginServiceInterface>>(DaffLoginDriver);
    daffAuthStorageService = TestBed.inject(DaffAuthStorageService);
    registrationFactory = TestBed.inject(DaffAccountRegistrationFactory);

    mockRegistration = registrationFactory.create();
    mockAuth = authFactory.create();
    setAuthTokenSpy = spyOn(daffAuthStorageService, 'setAuthToken');
    removeAuthTokenSpy = spyOn(daffAuthStorageService, 'removeAuthToken');

    token = mockAuth.token;
    email = mockRegistration.email;
    password = mockRegistration.password;
    mockLoginInfo = { email, password };
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('login$ | when the user logs in', () => {
    const mockAuthLoginAction = new DaffAuthLogin(mockLoginInfo);

    it('should compute the next action correctly', () => {
      const testStates: LoginTestState[] = [
        {
          didLoginSucceed: true,
          didTokenStorageSucceed: true,
          whatActionWasReturned: new DaffAuthLoginSuccess(mockAuth),
          whatWasTheValueOfTheStoredToken: mockAuth.token,
        },
        {
          didLoginSucceed: true,
          didTokenStorageSucceed: false,
          whatStorageErrorWasThrown: new DaffStorageServiceError('Storage of auth token has failed.'),
          whatActionWasReturned: new DaffAuthLoginFailure({
            code: 'DAFF_STORAGE_FAILURE', recoverable: false, message: 'Storage of auth token has failed.',
          }),
        },
        {
          didLoginSucceed: true,
          didTokenStorageSucceed: false,
          whatStorageErrorWasThrown: new DaffServerSideStorageError('Server side'),
          whatActionWasReturned: new DaffAuthServerSide(
            daffTransformErrorToStateError(new DaffServerSideStorageError('Server side')),
          ),
        },
        {
          didLoginSucceed: false,
          whatDriverErrorWasThrown: new DaffAuthenticationFailedError('Failed to log in'),
          whatActionWasReturned: new DaffAuthLoginFailure(daffTransformErrorToStateError(
            new DaffAuthenticationFailedError('Failed to log in'),
          )),
        },
      ];

      testStates.forEach((el) => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          if(el.didLoginSucceed) {
            daffLoginDriver.login.and.returnValue(of(mockAuth));
          } else {
            daffLoginDriver.login.and.returnValue(helpers.cold('#', {}, el.whatDriverErrorWasThrown));
          }

          actions$ = helpers.hot('--a', { a: mockAuthLoginAction });

          if(!el.didTokenStorageSucceed) {
            setAuthTokenSpy.and.throwError(el.whatStorageErrorWasThrown);
          }

          helpers.expectObservable(effects.login$).toBe('--b', { b: el.whatActionWasReturned });
          helpers.flush();
          if(el.whatWasTheValueOfTheStoredToken) {
            expect(setAuthTokenSpy).toHaveBeenCalledWith(mockAuth.token);
          }
        });
      });
    });
  });

  describe('logout$ | when the user logs out', () => {
    let expected;

    const mockAuthLogoutAction = new DaffAuthLogout();

    describe('and the logout is successful', () => {
      beforeEach(() => {
        daffLoginDriver.logout.and.returnValue(of(undefined));
        const mockAuthLogoutSuccessAction = new DaffAuthLogoutSuccess();

        actions$ = hot('--a', { a: mockAuthLogoutAction });
        expected = cold('--b', { b: mockAuthLogoutSuccessAction });
      });

      it('should notify state that the logout succeeded', () => {
        expect(effects.logout$).toBeObservable(expected);
      });
    });

    describe('and the logout fails', () => {
      beforeEach(() => {
        const error = new DaffAuthInvalidAPIResponseError('Failed to log out');
        const response = cold('#', {}, error);
        daffLoginDriver.logout.and.returnValue(response);
        const mockAuthLogoutFailureAction = new DaffAuthLogoutFailure(daffTransformErrorToStateError(error));

        actions$ = hot('--a', { a: mockAuthLogoutAction });
        expected = cold('--b', { b: mockAuthLogoutFailureAction });
      });

      it('should notify state that the logout failed', () => {
        expect(effects.logout$).toBeObservable(expected);
      });
    });
  });
});
