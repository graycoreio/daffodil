import {
  DaffAuthCheck,
  DaffAuthReducerState,
  DaffAuthCheckSuccess,
  DaffAuthCheckFailure,
  daffAuthInitialState as initialState,
  DaffAuthServerSide,
  DaffAuthStorageFailure,
  DaffAuthLoginSuccess,
  DaffAuthLogoutSuccess,
  DaffAuthGuardLogout,
  DaffAuthRegisterSuccess,
} from '@daffodil/auth/state';
import { DaffStateError } from '@daffodil/core/state';

import { daffAuthReducer as reducer } from './auth.reducer';

describe('@daffodil/auth/state | daffAuthReducer', () => {
  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when DaffAuthLoginSuccess is triggered', () => {
    let result: DaffAuthReducerState;

    beforeEach(() => {
      const authCompleteAction = new DaffAuthLoginSuccess(null);

      result = reducer(initialState, authCompleteAction);
    });

    it('sets loggedIn state to true', () => {
      expect(result.loggedIn).toBeTrue();
    });
  });

  describe('when DaffAuthRegisterSuccess is triggered', () => {
    let result: DaffAuthReducerState;

    describe('and the token is present', () => {
      beforeEach(() => {
        const authCompleteAction = new DaffAuthRegisterSuccess('token');

        result = reducer(initialState, authCompleteAction);
      });

      it('sets loggedIn state to true', () => {
        expect(result.loggedIn).toBeTrue();
      });
    });

    describe('and the token is not present', () => {
      beforeEach(() => {
        const authCompleteAction = new DaffAuthRegisterSuccess(null);

        result = reducer(initialState, authCompleteAction);
      });

      it('does nothing to loggedIn state', () => {
        expect(result.loggedIn).toEqual(initialState.loggedIn);
      });
    });
  });

  describe('when DaffAuthLogoutSuccess is triggered', () => {
    let result: DaffAuthReducerState;

    beforeEach(() => {
      const authRevokeAction = new DaffAuthLogoutSuccess();

      result = reducer(initialState, authRevokeAction);
    });

    it('sets loggedIn state to false', () => {
      expect(result.loggedIn).toBeFalse();
    });
  });

  describe('when AuthCheckAction is triggered', () => {
    let result: DaffAuthReducerState;

    beforeEach(() => {
      const authCheckAction = new DaffAuthCheck();

      result = reducer(initialState, authCheckAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when AuthCheckSuccessAction is triggered', () => {
    let result: DaffAuthReducerState;
    let state: DaffAuthReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authCheckSuccess = new DaffAuthCheckSuccess();
      result = reducer(state, authCheckSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('sets loggedIn state to true', () => {
      expect(result.loggedIn).toBeTrue();
    });

    it('resets errors', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when AuthCheckFailureAction is triggered', () => {
    const error: DaffStateError = {
      code: 'error code',
      message: 'error message',
    };
    let result: DaffAuthReducerState;
    let state: DaffAuthReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authCheckFailure = new DaffAuthCheckFailure(error);

      result = reducer(state, authCheckFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors).toEqual([error]);
    });

    it('sets loggedIn state to false', () => {
      expect(result.loggedIn).toBeFalse();
    });
  });

  describe('when DaffAuthGuardLogout is triggered', () => {
    const error: DaffStateError = {
      code: 'error code',
      message: 'error message',
    };
    let result: DaffAuthReducerState;
    let state: DaffAuthReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authCheckFailure = new DaffAuthGuardLogout(error);

      result = reducer(state, authCheckFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors).toEqual([error]);
    });

    it('sets loggedIn state to false', () => {
      expect(result.loggedIn).toBeFalse();
    });
  });

  describe('when AuthServerSideAction is triggered', () => {
    const error: DaffStateError = {
      code: 'error code',
      message: 'error message',
    };
    let result: DaffAuthReducerState;
    let state: DaffAuthReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authServerSide = new DaffAuthServerSide(error);

      result = reducer(state, authServerSide);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors).toEqual([error]);
    });
  });

  describe('when AuthStorageFailureAction is triggered', () => {
    const error: DaffStateError = {
      code: 'error code',
      message: 'error message',
    };
    let result: DaffAuthReducerState;
    let state: DaffAuthReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const authStorageFailure = new DaffAuthStorageFailure(error);

      result = reducer(state, authStorageFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors).toEqual([error]);
    });
  });
});
