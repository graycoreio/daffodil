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
  DaffAuthResetPasswordInfo,
  DaffAuthToken,
  DaffAccountRegistration,
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
} from '@daffodil/auth/state';
import { DaffAccountRegistrationFactory } from '@daffodil/auth/testing';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

import { DaffAuthResetPasswordEffects } from './reset-password.effects';

describe('@daffodil/auth/state | DaffAuthResetPasswordEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthResetPasswordEffects;

  let daffResetPasswordDriver: jasmine.SpyObj<DaffResetPasswordServiceInterface>;

  let registrationFactory: DaffAccountRegistrationFactory;

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
    daffResetPasswordDriver = TestBed.inject<jasmine.SpyObj<DaffResetPasswordServiceInterface>>(DaffResetPasswordDriver);

    mockRegistration = registrationFactory.create();

    token = 'token';
    email = mockRegistration.email;
    password = mockRegistration.password;
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('resetPassword$', () => {
    let expected;
    let mockAuthResetPasswordAction: DaffResetPassword;

    describe('when autoLogin is true', () => {
      beforeEach(() => {
        mockAuthResetPasswordAction = new DaffResetPassword(mockResetInfo, true);
      });

      describe('and the resetPassword is successful', () => {
        beforeEach(() => {
          daffResetPasswordDriver.resetPassword.and.returnValue(of(token));
          const mockAuthResetPasswordSuccessAction = new DaffResetPasswordSuccess();

          actions$ = hot('--a', { a: mockAuthResetPasswordAction });
          expected = cold('--b', { b: mockAuthResetPasswordSuccessAction });
        });

        it('should notify state that the resetPassword was successful', () => {
          expect(effects.resetPassword$).toBeObservable(expected);
        });
      });

      describe('and the resetPassword fails', () => {
        beforeEach(() => {
          const error = new DaffAuthenticationFailedError('Failed to reset password');
          const response = cold('#', {}, error);
          daffResetPasswordDriver.resetPassword.and.returnValue(response);
          const mockAuthResetPasswordFailureAction = new DaffResetPasswordFailure(daffTransformErrorToStateError(error));

          actions$ = hot('--a', { a: mockAuthResetPasswordAction });
          expected = cold('--b', { b: mockAuthResetPasswordFailureAction });
        });

        it('should notify state that the resetPassword failed', () => {
          expect(effects.resetPassword$).toBeObservable(expected);
        });
      });
    });

    describe('when autoLogin is false', () => {
      beforeEach(() => {
        mockAuthResetPasswordAction = new DaffResetPassword(mockResetInfo, false);
      });

      describe('and the resetPassword is successful', () => {
        beforeEach(() => {
          daffResetPasswordDriver.resetPasswordOnly.and.returnValue(of(undefined));
          const mockAuthResetPasswordSuccessAction = new DaffResetPasswordSuccess();

          actions$ = hot('--a', { a: mockAuthResetPasswordAction });
          expected = cold('--b', { b: mockAuthResetPasswordSuccessAction });
        });

        it('should notify state that the resetPassword was successful', () => {
          expect(effects.resetPassword$).toBeObservable(expected);
        });
      });

      describe('and the resetPassword fails', () => {
        beforeEach(() => {
          const error = new DaffAuthenticationFailedError('Failed to reset password');
          const response = cold('#', {}, error);
          daffResetPasswordDriver.resetPasswordOnly.and.returnValue(response);
          const mockAuthResetPasswordFailureAction = new DaffResetPasswordFailure(daffTransformErrorToStateError(error));

          actions$ = hot('--a', { a: mockAuthResetPasswordAction });
          expected = cold('--b', { b: mockAuthResetPasswordFailureAction });
        });

        it('should notify state that the resetPassword failed', () => {
          expect(effects.resetPassword$).toBeObservable(expected);
        });
      });
    });

  });

  describe('sendResetEmail$ | when the user registers an account', () => {
    let expected;

    const mockAuthSendResetEmailAction = new DaffSendResetEmail(email);

    describe('and the operation is successful', () => {
      beforeEach(() => {
        daffResetPasswordDriver.sendResetEmail.and.returnValue(of(undefined));
        const mockAuthSendResetEmailSuccessAction = new DaffSendResetEmailSuccess();

        actions$ = hot('--a', { a: mockAuthSendResetEmailAction });
        expected = cold('--b', { b: mockAuthSendResetEmailSuccessAction });
      });

      it('should notify state that the operation succeeded', () => {
        expect(effects.sendResetEmail$).toBeObservable(expected);
      });
    });

    describe('and the operation fails', () => {
      beforeEach(() => {
        const error = new DaffAuthInvalidAPIResponseError('Failed to register a new user');
        const response = cold('#', {}, error);
        daffResetPasswordDriver.sendResetEmail.and.returnValue(response);
        const mockAuthResetPasswordFailureAction = new DaffSendResetEmailFailure(daffTransformErrorToStateError(error));

        actions$ = hot('--a', { a: mockAuthSendResetEmailAction });
        expected = cold('--b', { b: mockAuthResetPasswordFailureAction });
      });

      it('should notify state that the operation failed', () => {
        expect(effects.sendResetEmail$).toBeObservable(expected);
      });
    });
  });
});
