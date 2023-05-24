import { TestBed } from '@angular/core/testing';

import {
  DaffAuthToken,
  DaffLoginInfo,
  DaffAccountRegistration,
} from '@daffodil/auth';
import {
  DaffAuthLogin,
  DaffAuthLoginReducerState,
  DaffAuthLoginSuccess,
  DaffAuthLoginFailure,
  DaffAuthLogout,
  DaffAuthLogoutSuccess,
  DaffAuthLogoutFailure,
  daffAuthLoginInitialState as initialState,
} from '@daffodil/auth/state';
import {
  DaffAuthTokenFactory,
  DaffAccountRegistrationFactory,
} from '@daffodil/auth/testing';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { daffAuthLoginReducer as reducer } from './login.reducer';

describe('@daffodil/auth/state | daffAuthLoginReducer', () => {
  let registrationFactory: DaffAccountRegistrationFactory;
  const authTokenFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let mockAuthToken: DaffAuthToken;
  let mockLoginInfo: DaffLoginInfo;
  let mockRegistration: DaffAccountRegistration;
  let email: string;
  let password: string;

  beforeEach(() => {
    registrationFactory = TestBed.inject(DaffAccountRegistrationFactory);

    mockRegistration = registrationFactory.create();
    mockAuthToken = authTokenFactory.create();

    email = mockRegistration.email;
    password = mockRegistration.password;
    mockLoginInfo = { email, password };
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when AuthLoginSuccessAction is triggered', () => {
    let result: DaffAuthLoginReducerState;
    let state: DaffAuthLoginReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authLoginSuccess = new DaffAuthLoginSuccess(mockAuthToken);
      result = reducer(state, authLoginSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('resets errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when AuthLoginFailureAction is triggered', () => {
    const error: DaffStateError = {
      code: 'error code',
      message: 'error message',
    };
    let result: DaffAuthLoginReducerState;
    let state: DaffAuthLoginReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authLoginFailure = new DaffAuthLoginFailure(error);

      result = reducer(state, authLoginFailure);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('adds an error to state.daffErrors', () => {
      expect(result.daffErrors).toEqual([error]);
    });
  });

  describe('when AuthLogoutAction is triggered', () => {
    let result: DaffAuthLoginReducerState;

    beforeEach(() => {
      const authLogoutAction = new DaffAuthLogout();

      result = reducer(initialState, authLogoutAction);
    });

    it('sets loading state to true', () => {
      expect(result.daffState).toEqual(DaffState.Resolving);
    });
  });

  describe('when AuthLogoutSuccessAction is triggered', () => {
    let result: DaffAuthLoginReducerState;
    let state: DaffAuthLoginReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authLogoutSuccess = new DaffAuthLogoutSuccess();
      result = reducer(state, authLogoutSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('resets errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when AuthLogoutFailureAction is triggered', () => {
    const error: DaffStateError = {
      code: 'error code',
      message: 'error message',
    };
    let result: DaffAuthLoginReducerState;
    let state: DaffAuthLoginReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authLogoutFailure = new DaffAuthLogoutFailure(error);

      result = reducer(state, authLogoutFailure);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('adds an error to state.daffErrors', () => {
      expect(result.daffErrors).toEqual([error]);
    });
  });
});
