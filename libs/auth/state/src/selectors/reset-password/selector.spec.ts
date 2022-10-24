import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffAuthStateRootSlice,
  DaffAuthResetPasswordReducerState,
  DAFF_AUTH_STORE_FEATURE_KEY,
  daffAuthReducers,
} from '@daffodil/auth/state';
import { DaffStateError } from '@daffodil/core/state';

import { DaffResetPasswordLanding } from '../../public_api';
import { getDaffAuthResetPasswordSelectors } from './selector';

describe('@daffodil/auth/state | getDaffAuthResetPasswordSelectors', () => {
  let store: Store<DaffAuthStateRootSlice>;

  let state: DaffAuthResetPasswordReducerState;
  let loading: boolean;
  let errors: DaffStateError[];
  let token: string;

  const {
    selectAuthResetPasswordState,
    selectAuthResetPasswordLoading,
    selectAuthResetPasswordErrors,
    selectAuthResetPasswordToken,
  } = getDaffAuthResetPasswordSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_AUTH_STORE_FEATURE_KEY]: combineReducers(daffAuthReducers),
        }),
      ],
    });

    store = TestBed.inject(Store);

    loading = false;
    errors = [];
    token = 'token';
    state = {
      loading,
      errors,
      token,
    };
  });

  describe('selectAuthResetPasswordState', () => {
    it('selects the register state', () => {
      store.dispatch(new DaffResetPasswordLanding(token));
      const selector = store.pipe(select(selectAuthResetPasswordState));
      const expected = cold('a', { a: state });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAuthResetPasswordLoading', () => {
    it('selects the loading state of the reset password state', () => {
      const selector = store.pipe(select(selectAuthResetPasswordLoading));
      const expected = cold('a', { a: loading });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAuthResetPasswordErrors', () => {
    it('returns the reset password errors', () => {
      const selector = store.pipe(select(selectAuthResetPasswordErrors));
      const expected = cold('a', { a: errors });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAuthResetPasswordToken', () => {
    it('returns the reset password token', () => {
      store.dispatch(new DaffResetPasswordLanding(token));
      const selector = store.pipe(select(selectAuthResetPasswordToken));
      const expected = cold('a', { a: token });
      expect(selector).toBeObservable(expected);
    });
  });
});
