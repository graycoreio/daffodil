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



describe('@daffodil/auth/state | DaffAuthLoginEffects', () => {
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

  afterEach(() => {
    daffLoginDriver.login.calls.reset();
    daffLoginDriver.logout.calls.reset();
    setAuthTokenSpy.calls.reset();
    removeAuthTokenSpy.calls.reset();
  });

  const setupLoginDriver = (
    testScheduler: TestScheduler,
    shouldSucceed: boolean,
    errorToThrow?: any,
  ) => {
    if (shouldSucceed) {
      daffLoginDriver.login.and.returnValue(of(mockAuth));
    } else {
      daffLoginDriver.login.and.returnValue(
        testScheduler.createColdObservable('#', {}, errorToThrow),
      );
    }
  };

  const setupLogoutDriver = (
    testScheduler: TestScheduler,
    shouldSucceed: boolean,
    errorToThrow?: any,
  ) => {
    if (shouldSucceed) {
      daffLoginDriver.logout.and.returnValue(of(undefined));
    } else {
      daffLoginDriver.logout.and.returnValue(
        testScheduler.createColdObservable('#', {}, errorToThrow),
      );
    }
  };

  const setupStorageService = (shouldSucceed: boolean, errorToThrow?: any) => {
    if (!shouldSucceed && errorToThrow) {
      setAuthTokenSpy.and.throwError(errorToThrow);
    }
  };

  const testEffectWithMarbles = (
    effect$: Observable<any>,
    action: any,
    expectedAction: any,
    testScheduler: TestScheduler,
  ) => {
    testScheduler.run(helpers => {
      actions$ = helpers.hot('--a', { a: action });
      helpers.expectObservable(effect$).toBe('--b', { b: expectedAction });
      helpers.flush();
    });
  };

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('login$ | when the user logs in', () => {
    const mockAuthLoginAction = new DaffAuthLogin(mockLoginInfo);

    describe('when login succeeds and token storage succeeds', () => {
      it('should return DaffAuthLoginSuccess and store the token', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        setupLoginDriver(testScheduler, true);
        setupStorageService(true);

        const expectedAction = new DaffAuthLoginSuccess(mockAuth);
        testEffectWithMarbles(effects.login$, mockAuthLoginAction, expectedAction, testScheduler);

        expect(setAuthTokenSpy).toHaveBeenCalledWith(mockAuth.token);
      });
    });

    describe('when login succeeds but token storage fails with DaffStorageServiceError', () => {
      it('should return DaffAuthLoginFailure with storage failure error', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        const storageError = new DaffStorageServiceError('Storage of auth token has failed.');
        setupLoginDriver(testScheduler, true);
        setupStorageService(false, storageError);

        const expectedAction = new DaffAuthLoginFailure({
          code: 'DAFF_STORAGE_FAILURE',
          recoverable: false,
          message: 'Storage of auth token has failed.',
        });

        testEffectWithMarbles(effects.login$, mockAuthLoginAction, expectedAction, testScheduler);
      });
    });

    describe('when login succeeds but token storage fails with DaffServerSideStorageError', () => {
      it('should return DaffAuthServerSide action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        const serverSideError = new DaffServerSideStorageError('Server side');
        setupLoginDriver(testScheduler, true);
        setupStorageService(false, serverSideError);

        const expectedAction = new DaffAuthServerSide(
          daffTransformErrorToStateError(serverSideError),
        );

        testEffectWithMarbles(effects.login$, mockAuthLoginAction, expectedAction, testScheduler);
      });
    });

    describe('when login fails with authentication error', () => {
      it('should return DaffAuthLoginFailure with authentication error', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        const authError = new DaffAuthenticationFailedError('Failed to log in');
        setupLoginDriver(testScheduler, false, authError);

        const expectedAction = new DaffAuthLoginFailure(
          daffTransformErrorToStateError(authError),
        );

        testEffectWithMarbles(effects.login$, mockAuthLoginAction, expectedAction, testScheduler);
      });
    });
  });

  describe('logout$ | when the user logs out', () => {
    const mockAuthLogoutAction = new DaffAuthLogout();

    describe('when logout succeeds', () => {
      it('should return DaffAuthLogoutSuccess', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        setupLogoutDriver(testScheduler, true);

        const expectedAction = new DaffAuthLogoutSuccess();
        testEffectWithMarbles(effects.logout$, mockAuthLogoutAction, expectedAction, testScheduler);
      });
    });

    describe('when logout fails with API response error', () => {
      it('should return DaffAuthLogoutFailure with the error', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        const apiError = new DaffAuthInvalidAPIResponseError('Failed to log out');
        setupLogoutDriver(testScheduler, false, apiError);

        const expectedAction = new DaffAuthLogoutFailure(
          daffTransformErrorToStateError(apiError),
        );

        testEffectWithMarbles(effects.logout$, mockAuthLogoutAction, expectedAction, testScheduler);
      });
    });
  });
});
