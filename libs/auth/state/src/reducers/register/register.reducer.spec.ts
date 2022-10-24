import { TestBed } from '@angular/core/testing';

import {
  DaffLoginInfo,
  DaffAccountRegistration,
} from '@daffodil/auth';
import {
  DaffAuthRegister,
  DaffAuthRegisterReducerState,
  DaffAuthRegisterSuccess,
  DaffAuthRegisterFailure,
  daffAuthRegisterInitialState as initialState,
} from '@daffodil/auth/state';
import { DaffAccountRegistrationFactory } from '@daffodil/auth/testing';
import { DaffStateError } from '@daffodil/core/state';

import { daffAuthRegisterReducer as reducer } from './register.reducer';

describe('@daffodil/auth/state | daffAuthRegisterReducer', () => {
  let registrationFactory: DaffAccountRegistrationFactory;

  let mockRegistration: DaffAccountRegistration;
  let email: string;
  let password: string;

  beforeEach(() => {
    registrationFactory = TestBed.inject(DaffAccountRegistrationFactory);

    mockRegistration = registrationFactory.create();

    email = mockRegistration.email;
    password = mockRegistration.password;
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

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
        loading: true,
      };

      const authRegisterSuccess = new DaffAuthRegisterSuccess();
      result = reducer(state, authRegisterSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when AuthRegisterFailureAction is triggered', () => {
    const error: DaffStateError = {
      code: 'error code',
      message: 'error message',
    };
    let result;
    let state: DaffAuthRegisterReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

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
