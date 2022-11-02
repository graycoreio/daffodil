import { TestBed } from '@angular/core/testing';

import {
  DaffLoginInfo,
  DaffAuthResetPasswordInfo,
} from '@daffodil/auth';
import {
  DaffResetPassword,
  DaffAuthResetPasswordReducerState,
  DaffResetPasswordSuccess,
  DaffResetPasswordFailure,
  daffAuthResetPasswordInitialState as initialState,
  DaffSendResetEmailFailure,
  DaffSendResetEmailSuccess,
  DaffSendResetEmail,
} from '@daffodil/auth/state';
import { DaffAuthResetPasswordInfoFactory } from '@daffodil/auth/testing';
import { DaffStateError } from '@daffodil/core/state';

import { DaffResetPasswordLanding } from '../../public_api';
import { daffAuthResetPasswordReducer as reducer } from './reducer';

describe('@daffodil/auth/state | daffAuthResetPasswordReducer', () => {
  let registrationFactory: DaffAuthResetPasswordInfoFactory;

  let mockResetInfo: DaffAuthResetPasswordInfo;
  let email: string;
  let password: string;

  beforeEach(() => {
    registrationFactory = TestBed.inject(DaffAuthResetPasswordInfoFactory);

    mockResetInfo = registrationFactory.create();

    email = mockResetInfo.email;
    password = mockResetInfo.password;
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when AuthResetPasswordAction is triggered', () => {
    let result: DaffAuthResetPasswordReducerState;

    beforeEach(() => {
      const authResetPasswordAction = new DaffResetPassword(mockResetInfo);

      result = reducer(initialState, authResetPasswordAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when AuthResetPasswordSuccessAction is triggered', () => {
    let result: DaffAuthResetPasswordReducerState;
    let state: DaffAuthResetPasswordReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authResetPasswordSuccess = new DaffResetPasswordSuccess();
      result = reducer(state, authResetPasswordSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('resets errors', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when AuthResetPasswordFailureAction is triggered', () => {
    const error: DaffStateError = {
      code: 'error code',
      message: 'error message',
    };
    let result: DaffAuthResetPasswordReducerState;
    let state: DaffAuthResetPasswordReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authResetPasswordFailure = new DaffResetPasswordFailure(error);

      result = reducer(state, authResetPasswordFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors).toEqual([error]);
    });
  });

  describe('when AuthSendResetEmailAction is triggered', () => {
    let result: DaffAuthResetPasswordReducerState;

    beforeEach(() => {
      const authSendResetEmailAction = new DaffSendResetEmail(email);

      result = reducer(initialState, authSendResetEmailAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when AuthSendResetEmailSuccessAction is triggered', () => {
    let result: DaffAuthResetPasswordReducerState;
    let state: DaffAuthResetPasswordReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authSendResetEmailSuccess = new DaffSendResetEmailSuccess();
      result = reducer(state, authSendResetEmailSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('resets errors', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when AuthSendResetEmailFailureAction is triggered', () => {
    const error: DaffStateError = {
      code: 'error code',
      message: 'error message',
    };
    let result: DaffAuthResetPasswordReducerState;
    let state: DaffAuthResetPasswordReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authSendResetEmailFailure = new DaffSendResetEmailFailure(error);

      result = reducer(state, authSendResetEmailFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors).toEqual([error]);
    });
  });

  describe('when ResetPasswordLandingAction is triggered', () => {
    let result: DaffAuthResetPasswordReducerState;

    beforeEach(() => {
      const authSendResetEmailAction = new DaffResetPasswordLanding(mockResetInfo.token);

      result = reducer(initialState, authSendResetEmailAction);
    });

    it('sets the token', () => {
      expect(result.token).toEqual(mockResetInfo.token);
    });
  });
});
