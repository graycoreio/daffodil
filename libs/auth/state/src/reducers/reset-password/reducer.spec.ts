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
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { daffAuthResetPasswordReducer as reducer } from './reducer';
import { DaffResetPasswordLanding } from '../../public_api';

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

  describe('when AuthResetPasswordSuccessAction is triggered', () => {
    let result: DaffAuthResetPasswordReducerState;
    let state: DaffAuthResetPasswordReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authResetPasswordSuccess = new DaffResetPasswordSuccess();
      result = reducer(state, authResetPasswordSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('resets errors', () => {
      expect(result.daffErrors).toEqual([]);
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
        daffState: DaffState.Resolving,
        daffErrors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authResetPasswordFailure = new DaffResetPasswordFailure(error);

      result = reducer(state, authResetPasswordFailure);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('adds an error to state.daffErrors', () => {
      expect(result.daffErrors).toEqual([error]);
    });
  });

  describe('when AuthSendResetEmailSuccessAction is triggered', () => {
    let result: DaffAuthResetPasswordReducerState;
    let state: DaffAuthResetPasswordReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authSendResetEmailSuccess = new DaffSendResetEmailSuccess();
      result = reducer(state, authSendResetEmailSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('resets errors', () => {
      expect(result.daffErrors).toEqual([]);
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
        daffState: DaffState.Resolving,
        daffErrors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authSendResetEmailFailure = new DaffSendResetEmailFailure(error);

      result = reducer(state, authSendResetEmailFailure);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('adds an error to state.daffErrors', () => {
      expect(result.daffErrors).toEqual([error]);
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
