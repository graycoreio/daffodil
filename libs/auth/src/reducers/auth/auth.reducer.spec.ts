import { DaffAuthReducerState } from './auth-reducer-state.interface';
import {
  DaffAuthCheck,
  DaffAuthCheckSuccess,
  DaffAuthCheckFailure,
} from '../../actions/auth.actions';
import { daffAuthReducer as reducer } from './auth.reducer';
import { daffAuthInitialState as initialState } from './auth-initial-state'


describe('Auth | Reducer | Auth', () => {
  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when AuthCheckAction is triggered', () => {
    let result;

    beforeEach(() => {
      const authCheckAction = new DaffAuthCheck();

      result = reducer(initialState, authCheckAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when AuthCheckSuccessAction is triggered', () => {
    let result;
    let state: DaffAuthReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const authCheckSuccess = new DaffAuthCheckSuccess();
      result = reducer(state, authCheckSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when AuthCheckFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffAuthReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      const authCheckFailure = new DaffAuthCheckFailure(error);

      result = reducer(state, authCheckFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors).toEqual([error]);
    });
  });
});
