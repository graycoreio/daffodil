import {
  DaffAuthTokenFactory,
  DaffAccountRegistrationFactory
} from '@daffodil/auth/testing';

import { DaffAuthLoginReducerState } from './login-reducer-state.interface';
import {
  DaffAuthLogin,
  DaffAuthLoginSuccess,
  DaffAuthLoginFailure,
  DaffAuthLogout,
  DaffAuthLogoutSuccess,
  DaffAuthLogoutFailure,
} from '../../actions/auth.actions';
import { daffAuthLoginReducer as reducer } from './login.reducer';
import { daffAuthLoginInitialState as initialState } from './login-initial-state'
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffAuthToken } from '../../models/auth-token';

describe('Auth | Reducer | Login', () => {
  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();
  const authTokenFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let mockAuthToken: DaffAuthToken;
  let mockLoginInfo: DaffLoginInfo;
  let mockRegistration: DaffAccountRegistration;
  let email: string;
  let password: string;
  let firstName: string;
  let lastName: string;

  beforeEach(() => {
    mockRegistration = registrationFactory.create();
    mockAuthToken = authTokenFactory.create();

    firstName = mockRegistration.customer.firstName;
    lastName = mockRegistration.customer.lastName;
    email = mockRegistration.customer.email;
    password = mockRegistration.password;
    mockLoginInfo = {email, password};
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when AuthLoginAction is triggered', () => {
    let result;

    beforeEach(() => {
      const authLoginAction: DaffAuthLogin<DaffLoginInfo> = new DaffAuthLogin(mockLoginInfo);

      result = reducer(initialState, authLoginAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when AuthLoginSuccessAction is triggered', () => {
    let result;
    let state: DaffAuthLoginReducerState<DaffAuthToken>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const authLoginSuccess = new DaffAuthLoginSuccess(mockAuthToken);
      result = reducer(state, authLoginSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('sets auth to the payload auth', () => {
      expect(result.auth).toEqual(mockAuthToken);
    });
  });

  describe('when AuthLoginFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffAuthLoginReducerState<DaffAuthToken>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      const authLoginFailure = new DaffAuthLoginFailure(error);

      result = reducer(state, authLoginFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors).toEqual([error]);
    });
  });

  describe('when AuthLogoutAction is triggered', () => {
    let result;

    beforeEach(() => {
      const authLogoutAction = new DaffAuthLogout();

      result = reducer(initialState, authLogoutAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when AuthLogoutSuccessAction is triggered', () => {
    let result;
    let state: DaffAuthLoginReducerState<DaffAuthToken>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        auth: mockAuthToken
      }

      const authLogoutSuccess = new DaffAuthLogoutSuccess();
      result = reducer(state, authLogoutSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('sets auth state to null', () => {
      expect(result.auth).toBeNull();
    });
  });

  describe('when AuthLogoutFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffAuthLoginReducerState<DaffAuthToken>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      const authLogoutFailure = new DaffAuthLogoutFailure(error);

      result = reducer(state, authLogoutFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors).toEqual([error]);
    });
  });
});
