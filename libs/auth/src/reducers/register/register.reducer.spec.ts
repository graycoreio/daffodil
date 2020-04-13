import {
  DaffAccountRegistrationFactory
} from '@daffodil/auth/testing';

import { DaffAuthRegisterReducerState } from './register-reducer-state.interface';
import {
  DaffAuthRegister,
  DaffAuthRegisterSuccess,
  DaffAuthRegisterFailure,
} from '../../actions/auth.actions';
import { daffAuthRegisterReducer as reducer } from './register.reducer';
import { daffAuthRegisterInitialState as initialState } from './register-initial-state'
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffLoginInfo } from '../../models/login-info';

describe('Auth | Reducer | Register', () => {
  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();

  let mockLoginInfo: DaffLoginInfo;
  let mockRegistration: DaffAccountRegistration;
  let email: string;
  let password: string;
  let firstName: string;
  let lastName: string;

  beforeEach(() => {
    mockRegistration = registrationFactory.create();

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

  describe('when AuthRegisterAction is triggered', () => {
    let result;

    beforeEach(() => {
      const authRegisterAction: DaffAuthRegister<DaffAccountRegistration> = new DaffAuthRegister(mockRegistration);

      result = reducer(initialState, authRegisterAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when AuthRegisterSuccessAction is triggered', () => {
    let result;
    let state: DaffAuthRegisterReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const authRegisterSuccess = new DaffAuthRegisterSuccess(mockLoginInfo);
      result = reducer(state, authRegisterSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when AuthRegisterFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffAuthRegisterReducerState;

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
