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
  DaffAuthComplete,
  DaffAuthServerSide,
  DaffAuthStorageFailure,
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

import { DaffAuthRegisterEffects } from './register.effects';

describe('@daffodil/auth/state | DaffAuthRegisterEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthRegisterEffects;

  let daffRegisterDriver: jasmine.SpyObj<DaffRegisterServiceInterface>;
  let daffAuthStorageService: DaffAuthStorageService;

  let registrationFactory: DaffAccountRegistrationFactory;
  const authFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let setAuthTokenSpy: jasmine.Spy;
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
          useValue: jasmine.createSpyObj('DaffRegisterService', ['register', 'registerOnly']),
        },
      ],
    });

    effects = TestBed.inject(DaffAuthRegisterEffects);

    daffRegisterDriver = TestBed.inject<jasmine.SpyObj<DaffRegisterServiceInterface>>(DaffRegisterDriver);
    daffAuthStorageService = TestBed.inject(DaffAuthStorageService);
    registrationFactory = TestBed.inject(DaffAccountRegistrationFactory);

    mockRegistration = registrationFactory.create();
    mockAuth = authFactory.create();

    setAuthTokenSpy = spyOn(daffAuthStorageService, 'setAuthToken');
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
    let mockAuthRegisterAction: DaffAuthRegister;

    describe('when autoLogin is true', () => {
      beforeEach(() => {
        mockAuthRegisterAction = new DaffAuthRegister(mockRegistration, true);
        actions$ = hot('--a', { a: mockAuthRegisterAction });
      });

      describe('and the register is successful', () => {
        beforeEach(() => {
          daffRegisterDriver.register.and.returnValue(of(token));
        });

        describe('and setToken is successful', () => {
          beforeEach(() => {
            const mockAuthResetPasswordSuccessAction = new DaffAuthRegisterSuccess();
            const mockAuthCompleteAction = new DaffAuthComplete();

            expected = cold('--(ba)', { a: mockAuthCompleteAction, b: mockAuthResetPasswordSuccessAction });
          });

          it('should notify state that the register was successful', () => {
            expect(effects.register$).toBeObservable(expected);
          });

          it('should store the auth token', () => {
            expect(effects.register$).toBeObservable(expected);
            expect(setAuthTokenSpy).toHaveBeenCalledWith(token);
          });
        });

        describe('and the storage service throws a server side error', () => {
          beforeEach(() => {
            const error = new DaffServerSideStorageError('Server side');
            const serverSideAction = new DaffAuthServerSide(daffTransformErrorToStateError(error));
            const mockAuthResetPasswordFailureAction = new DaffAuthRegisterFailure(daffTransformErrorToStateError(error));
            setAuthTokenSpy.and.throwError(error);
            expected = cold('--(ab)', { a: serverSideAction, b: mockAuthResetPasswordFailureAction });
          });

          it('should dispatch a server side and a failure action', () => {
            expect(effects.register$).toBeObservable(expected);
          });
        });

        describe('and the storage service throws a storage error', () => {
          beforeEach(() => {
            const error = new DaffStorageServiceError('Storage error');
            const storageAction = new DaffAuthStorageFailure(daffTransformErrorToStateError(error));
            const mockAuthResetPasswordFailureAction = new DaffAuthRegisterFailure(daffTransformErrorToStateError(error));
            setAuthTokenSpy.and.throwError(error);
            expected = cold('--(ab)', { a: storageAction, b: mockAuthResetPasswordFailureAction });
          });

          it('should dispatch a server side action', () => {
            expect(effects.register$).toBeObservable(expected);
          });
        });
      });

      describe('and the register fails', () => {
        beforeEach(() => {
          const error = new DaffAuthInvalidAPIResponseError('Failed to register a new user');
          const response = cold('#', {}, error);
          daffRegisterDriver.register.and.returnValue(response);
          const mockAuthResetPasswordFailureAction = new DaffAuthRegisterFailure(daffTransformErrorToStateError(error));

          actions$ = hot('--a', { a: mockAuthRegisterAction });
          expected = cold('--b', { b: mockAuthResetPasswordFailureAction });
        });

        it('should notify state that the register failed', () => {
          expect(effects.register$).toBeObservable(expected);
        });
      });
    });

    describe('when autoLogin is false', () => {
      beforeEach(() => {
        mockAuthRegisterAction = new DaffAuthRegister(mockRegistration, false);
      });

      describe('and the register is successful', () => {
        beforeEach(() => {
          daffRegisterDriver.registerOnly.and.returnValue(of(undefined));
          const mockAuthResetPasswordSuccessAction = new DaffAuthRegisterSuccess();

          actions$ = hot('--a', { a: mockAuthRegisterAction });
          expected = cold('--b', { b: mockAuthResetPasswordSuccessAction });
        });

        it('should notify state that the register was successful', () => {
          expect(effects.register$).toBeObservable(expected);
        });
      });

      describe('and the register fails', () => {
        beforeEach(() => {
          const error = new DaffAuthInvalidAPIResponseError('Failed to register a new user');
          const response = cold('#', {}, error);
          daffRegisterDriver.registerOnly.and.returnValue(response);
          const mockAuthResetPasswordFailureAction = new DaffAuthRegisterFailure(daffTransformErrorToStateError(error));

          actions$ = hot('--a', { a: mockAuthRegisterAction });
          expected = cold('--b', { b: mockAuthResetPasswordFailureAction });
        });

        it('should notify state that the register failed', () => {
          expect(effects.register$).toBeObservable(expected);
        });
      });
    });
  });
});
