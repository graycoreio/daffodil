import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffAuthResetPasswordInfo,
  DaffAccountRegistration,
  DaffAuthStorageService,
} from '@daffodil/auth';
import {
  DaffResetPasswordDriver,
  DaffResetPasswordServiceInterface,
  DaffAuthenticationFailedError,
  DaffAuthInvalidAPIResponseError,
} from '@daffodil/auth/driver';
import {
  DaffResetPassword,
  DaffResetPasswordSuccess,
  DaffResetPasswordFailure,
  DaffSendResetEmail,
  DaffSendResetEmailSuccess,
  DaffSendResetEmailFailure,
  DaffAuthServerSide,
  DaffAuthStorageFailure,
} from '@daffodil/auth/state';
import { DaffAccountRegistrationFactory } from '@daffodil/auth/testing';
import {
  DaffServerSideStorageError,
  DaffStorageServiceError,
} from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

import { DaffAuthResetPasswordEffects } from './reset-password.effects';

interface ResetPasswordTestState {
  isAutoLoginTrue: boolean;
  didPasswordResetSucceed: boolean;
  didTokenStorageSucceed?: boolean;
  whatErrorWasThrown?: DaffStorageServiceError;
  whatActionWasReturned?: Action;
  whatOtherActionWasReturned?: Action;
};

interface SendResetEmailTestState {
  wasOperationSuccessful: boolean;
  whatActionWasReturned: Action;
  whatErrorWasThrown?: DaffStorageServiceError;
};

describe('@daffodil/auth/state | DaffAuthResetPasswordEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthResetPasswordEffects;

  let daffResetPasswordDriver: jasmine.SpyObj<DaffResetPasswordServiceInterface>;
  let daffAuthStorageService: DaffAuthStorageService;

  let registrationFactory: DaffAccountRegistrationFactory;

  let setAuthTokenSpy: jasmine.Spy;
  let mockResetInfo: DaffAuthResetPasswordInfo;
  let token: string;
  let email: string;
  let password: string;
  let mockRegistration: DaffAccountRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffAuthResetPasswordEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffResetPasswordDriver,
          useValue: jasmine.createSpyObj('DaffResetPasswordService', ['sendResetEmail', 'resetPassword', 'resetPasswordOnly']),
        },
      ],
    });

    effects = TestBed.inject(DaffAuthResetPasswordEffects);
    registrationFactory = TestBed.inject(DaffAccountRegistrationFactory);
    daffAuthStorageService = TestBed.inject(DaffAuthStorageService);
    daffResetPasswordDriver = TestBed.inject<jasmine.SpyObj<DaffResetPasswordServiceInterface>>(DaffResetPasswordDriver);

    mockRegistration = registrationFactory.create();

    setAuthTokenSpy = spyOn(daffAuthStorageService, 'setAuthToken');
    token = 'token';
    email = mockRegistration.email;
    password = mockRegistration.password;
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('resetPassword$', () => {
    it('should compute the next action correctly', () => {
      const testStates: ResetPasswordTestState[] = [
        {
          isAutoLoginTrue: true,
          didPasswordResetSucceed: true,
          didTokenStorageSucceed: true,
          whatActionWasReturned: new DaffResetPasswordSuccess(token),
        },
        {
          isAutoLoginTrue: true,
          didPasswordResetSucceed: true,
          didTokenStorageSucceed: false,
          whatErrorWasThrown: new DaffServerSideStorageError('Server side'),
          whatActionWasReturned: new DaffResetPasswordFailure(daffTransformErrorToStateError(
            new DaffServerSideStorageError('Server side'),
          )),
          whatOtherActionWasReturned: new DaffAuthServerSide(daffTransformErrorToStateError(
            new DaffServerSideStorageError('Server side'),
          )),
        },
        {
          isAutoLoginTrue: true,
          didPasswordResetSucceed: true,
          didTokenStorageSucceed: false,
          whatErrorWasThrown: new DaffStorageServiceError('Storage error'),
          whatActionWasReturned: new DaffResetPasswordFailure(daffTransformErrorToStateError(
            new DaffStorageServiceError('Storage error'),
          )),
          whatOtherActionWasReturned: new DaffAuthStorageFailure(daffTransformErrorToStateError(
            new DaffStorageServiceError('Storage error'),
          )),
        },
        {
          isAutoLoginTrue: true,
          didPasswordResetSucceed: false,
          whatErrorWasThrown: new DaffAuthenticationFailedError('Failed to reset password'),
          whatActionWasReturned: new DaffResetPasswordFailure(daffTransformErrorToStateError(
            new DaffAuthenticationFailedError('Failed to reset password'),
          )),
        },
        {
          isAutoLoginTrue: false,
          didPasswordResetSucceed: true,
          whatActionWasReturned: new DaffResetPasswordSuccess(),
        },
        {
          isAutoLoginTrue: false,
          didPasswordResetSucceed: false,
          whatErrorWasThrown: new DaffAuthenticationFailedError('Failed to reset password'),
          whatActionWasReturned: new DaffResetPasswordFailure(daffTransformErrorToStateError(
            new DaffAuthenticationFailedError('Failed to reset password'),
          )),
        },
      ];

      testStates.forEach((el) => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const mockAuthResetPasswordAction = new DaffResetPassword(mockResetInfo, el.isAutoLoginTrue);
          actions$ = helpers.hot('--a', { a: mockAuthResetPasswordAction });
          if (el.didPasswordResetSucceed) {
            if (el.isAutoLoginTrue) {
              daffResetPasswordDriver.resetPassword.and.returnValue(of(token));
            } else {
              daffResetPasswordDriver.resetPasswordOnly.and.returnValue(of(undefined));
            }
            if (el.whatErrorWasThrown) {
              setAuthTokenSpy.and.throwError(el.whatErrorWasThrown);
            } else {
              setAuthTokenSpy.and.returnValue(undefined);
            }
          } else {
            if (el.isAutoLoginTrue) {
              daffResetPasswordDriver.resetPassword.and.returnValue(helpers.cold<any>('#', {}, el.whatErrorWasThrown));
            } else {
              daffResetPasswordDriver.resetPasswordOnly.and.returnValue(helpers.cold<any>('#', {}, el.whatErrorWasThrown));
            }
          }
          if (el.didPasswordResetSucceed && el.whatErrorWasThrown){
            helpers.expectObservable(effects.resetPassword$).toBe('--(ab)', { a: el.whatOtherActionWasReturned, b: el.whatActionWasReturned });
          } else {
            helpers.expectObservable(effects.resetPassword$).toBe('--b', { b: el.whatActionWasReturned });
          }
        });
      });
    });
  });


  describe('sendResetEmail$ | when the user registers an account', () => {
    it('should compute the next action correctly', () => {
      const testStates: SendResetEmailTestState[] = [
        {
          wasOperationSuccessful: true,
          whatActionWasReturned: new DaffSendResetEmailSuccess(),
        },
        {
          wasOperationSuccessful: false,
          whatActionWasReturned: new DaffSendResetEmailFailure(daffTransformErrorToStateError(
            new DaffAuthInvalidAPIResponseError('Failed to register a new user'),
          )),
          whatErrorWasThrown: new DaffAuthInvalidAPIResponseError('Failed to register a new user'),
        },
      ];

      testStates.forEach((el) => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const mockAuthSendResetEmailAction = new DaffSendResetEmail(email);
          actions$ = helpers.hot('--a', { a: mockAuthSendResetEmailAction });

          if(el.whatErrorWasThrown) {
            daffResetPasswordDriver.sendResetEmail.and.returnValue(helpers.cold<any>('#', {}, el.whatErrorWasThrown));
          } else {
            daffResetPasswordDriver.sendResetEmail.and.returnValue(of(undefined));
          }

          helpers.expectObservable(effects.sendResetEmail$).toBe('--b', { b: el.whatActionWasReturned });
        });
      });
    });
  });
});
