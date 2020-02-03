import { AuthReducerState } from './auth-reducer-state.interface';
import {
  DaffAuthLogin,
  DaffAuthLoginSuccess,
  DaffAuthLoginFailure,
  DaffAuthRegister,
  DaffAuthRegisterSuccess,
  DaffAuthRegisterFailure
} from '../../actions/auth.actions';
import { reducer } from './auth.reducer';
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffAccountRegistrationFactory } from 'libs/auth/testing/src';
import { DaffLoginRequest } from '../../models/login-request';
import { DaffAuth } from '../../models/auth';
import { DaffRegisterRequest } from '../../models/register-request';


describe('Auth | Auth Reducer', () => {
  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();

  let mockAuth: DaffAuth;
  let mockLoginInfo: DaffLoginRequest;
  let mockRegistration: DaffAccountRegistration;
  let email: string;
  let password: string;
  let firstName: string;
  let lastName: string;

  const initialState: AuthReducerState = {
    token: null,
    loading: false,
    errors: []
  }

  beforeEach(() => {
    mockRegistration = registrationFactory.create();

    mockAuth = {token: 'as7dg67dsfg8'};
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
      const authLoginAction: DaffAuthLogin<DaffLoginRequest> = new DaffAuthLogin(mockLoginInfo);

      result = reducer(initialState, authLoginAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when AuthLoginSuccessAction is triggered', () => {
    let result;
    let state: AuthReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const authLoginSuccess = new DaffAuthLoginSuccess(mockAuth);
      result = reducer(state, authLoginSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('sets token to the payload token', () => {
      expect(result.token).toEqual(mockAuth.token);
    });
  });

  describe('when AuthLoginFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: AuthReducerState;

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

  describe('when AuthRegisterAction is triggered', () => {
    let result;

    beforeEach(() => {
      const authRegisterAction: DaffAuthRegister<DaffRegisterRequest> = new DaffAuthRegister(mockRegistration);

      result = reducer(initialState, authRegisterAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when AuthRegisterSuccessAction is triggered', () => {
    let result;
    let state: AuthReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const authRegisterSuccess = new DaffAuthRegisterSuccess(mockAuth);
      result = reducer(state, authRegisterSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('sets token to the payload token', () => {
      expect(result.token).toEqual(mockAuth.token);
    });
  });

  describe('when AuthRegisterFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: AuthReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      const authRegisterFailure = new DaffAuthRegisterFailure(error);

      result = reducer(state, authRegisterFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors).toEqual([error]);
    });
  });
});
