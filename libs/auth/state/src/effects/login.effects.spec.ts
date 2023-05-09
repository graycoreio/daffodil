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

  const authStorageFailureAction = new DaffAuthStorageFailure(daffTransformErrorToStateError(
    new DaffStorageServiceError('Storage of auth token has failed.')),
  );
  const throwStorageError = () => {
    throw new DaffStorageServiceError('Storage of auth token has failed.');
  };

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
    let expected;

    const mockAuthLoginAction = new DaffAuthLogin(mockLoginInfo);

    describe('and the login is successful', () => {
      beforeEach(() => {
        daffLoginDriver.login.and.returnValue(of(mockAuth));
        const mockAuthLoginSuccessAction = new DaffAuthLoginSuccess(mockAuth);

        actions$ = hot('--a', { a: mockAuthLoginAction });
        expected = cold('--b', { b: mockAuthLoginSuccessAction });
      });

      it('should notify state that the login was successful', () => {
        expect(effects.login$).toBeObservable(expected);
      });
    });

    describe('and the login fails', () => {
      beforeEach(() => {
        const error = new DaffAuthenticationFailedError('Failed to log in');
        const response = cold('#', {}, error);
        daffLoginDriver.login.and.returnValue(response);
        const mockAuthLoginFailureAction = new DaffAuthLoginFailure(daffTransformErrorToStateError(error));

        actions$ = hot('--a', { a: mockAuthLoginAction });
        expected = cold('--b', { b: mockAuthLoginFailureAction });
      });

      it('should notify state that the login failed', () => {
        expect(effects.login$).toBeObservable(expected);
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

  describe('storeAuthToken$ | storing the auth token after a successful login', () => {
    let expected;
    let authLoginSuccessAction;

    beforeEach(() => {
      authLoginSuccessAction = new DaffAuthLoginSuccess(mockAuth);
      actions$ = hot('--a', { a: authLoginSuccessAction });
      expected = cold('---');
    });

    it('should set the auth token in storage', () => {
      expect(effects.storeAuthToken$).toBeObservable(expected);
      expect(setAuthTokenSpy).toHaveBeenCalledWith(mockAuth.token);
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        setAuthTokenSpy.and.callFake(throwStorageError);

        expected = cold('--(b|)', { b: authStorageFailureAction });
      });

      it('should return a DaffAuthStorageFailure', () => {
        expect(effects.storeAuthToken$).toBeObservable(expected);
      });

      describe('and the storage service throws a server side error', () => {
        beforeEach(() => {
          const error = new DaffServerSideStorageError('Server side');
          const serverSideAction = new DaffAuthServerSide(daffTransformErrorToStateError(error));
          setAuthTokenSpy.and.throwError(error);
          expected = cold('--(a|)', { a: serverSideAction });
        });

        it('should dispatch a server side action', () => {
          expect(effects.storeAuthToken$).toBeObservable(expected);
        });
      });
    });
  });

  describe('removeAuthToken$', () => {
    let expected;
    let authLogoutSuccessAction: DaffAuthLogoutSuccess;

    beforeEach(() => {
      authLogoutSuccessAction = new DaffAuthLogoutSuccess();
      actions$ = hot('--a', { a: authLogoutSuccessAction });
      expected = cold('---');
    });

    it('should remove the auth token from storage', () => {
      expect(effects.removeAuthToken$).toBeObservable(expected);
      expect(removeAuthTokenSpy).toHaveBeenCalledWith();
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        removeAuthTokenSpy.and.callFake(throwStorageError);

        expected = cold('--(b|)', { b: authStorageFailureAction });
      });

      it('should return a DaffAuthStorageFailure', () => {
        expect(effects.removeAuthToken$).toBeObservable(expected);
      });
    });

    describe('and the storage service throws a server side error', () => {
      beforeEach(() => {
        const error = new DaffServerSideStorageError('Server side');
        const serverSideAction = new DaffAuthServerSide(daffTransformErrorToStateError(error));
        removeAuthTokenSpy.and.throwError(error);
        expected = cold('--(a|)', { a: serverSideAction });
      });

      it('should dispatch a server side action', () => {
        expect(effects.removeAuthToken$).toBeObservable(expected);
      });
    });
  });
});
