import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffAuthTokenFactory
} from '@daffodil/auth/testing';

import { DaffAuthLoginSuccess } from '../actions/auth.actions';
import {
  DaffAuthFeatureState,
  DAFF_AUTH_STORE_FEATURE_KEY,
  daffAuthReducers,
  DaffAuthLoginReducerState
} from '../reducers/public_api';
import { DaffAuthToken } from '../models/auth-token';
import {
  getDaffAuthLoginSelectors
} from './login.selector';

describe('Auth | Selector | Login', () => {
  let store: Store<DaffAuthFeatureState<DaffAuthToken>>;

  const authTokenFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let state: DaffAuthLoginReducerState<DaffAuthToken>;
  let loading: boolean;
  let errors: string[];
  let token: string;
  let mockAuthToken: DaffAuthToken;

  const {
    selectAuthLoginState,
    selectAuthLoginToken,
    selectAuthLoginTokenValue,
    selectAuthLoginLoading,
    selectAuthLoginErrors
  } = getDaffAuthLoginSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_AUTH_STORE_FEATURE_KEY]: combineReducers(daffAuthReducers)
        })
      ]
    });

    store = TestBed.get(Store);

    mockAuthToken = authTokenFactory.create();

    loading = false;
    errors = [];
    token = mockAuthToken.token;
    state = {
      loading,
      errors,
      auth: mockAuthToken
    };

    // init store to desired state
    store.dispatch(new DaffAuthLoginSuccess(mockAuthToken));
  });

  describe('selectAuthLoginState', () => {
    it('selects the login state', () => {
      const selector = store.pipe(select(selectAuthLoginState));
      const expected = cold('a', { a: state });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAuthLoginToken', () => {
    it('selects the auth token', () => {
      const selector = store.pipe(select(selectAuthLoginToken));
      const expected = cold('a', { a: mockAuthToken });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAuthLoginTokenValue', () => {
    it('selects the auth token value', () => {
      const selector = store.pipe(select(selectAuthLoginTokenValue));
      const expected = cold('a', { a: token });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAuthLoginLoading', () => {
    it('selects the loading state of the auth', () => {
      const selector = store.pipe(select(selectAuthLoginLoading));
      const expected = cold('a', { a: loading });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAuthLoginErrors', () => {
    it('returns the selected auth errors', () => {
      const selector = store.pipe(select(selectAuthLoginErrors));
      const expected = cold('a', { a: errors });
      expect(selector).toBeObservable(expected);
    });
  });
});
