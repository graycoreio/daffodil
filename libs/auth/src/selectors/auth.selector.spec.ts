import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  getDaffAuthSelectors
} from './auth.selector';
import {
  DaffAuthFeatureState,
  daffAuthReducers,
  DAFF_AUTH_STORE_FEATURE_KEY,
  DaffAuthReducerState
} from '../reducers/public_api';
import { DaffAuthToken } from '../models/auth-token';

describe('Auth | Selector | Auth', () => {
  let store: Store<DaffAuthFeatureState<DaffAuthToken>>;

  let state: DaffAuthReducerState;
  let loading: boolean;
  let errors: string[];

  const {
    selectAuthLoading,
    selectAuthErrors,
    selectAuthState
  } = getDaffAuthSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_AUTH_STORE_FEATURE_KEY]: combineReducers(daffAuthReducers)
        })
      ]
    });

    store = TestBed.get(Store);

    loading = false;
    errors = [];
    state = {
      loading,
      errors,
    };
  });

  describe('selectAuthState', () => {
    it('selects the auth state', () => {
      const selector = store.pipe(select(selectAuthState));
      const expected = cold('a', { a: state });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAuthLoading', () => {
    it('selects the loading state of the auth', () => {
      const selector = store.pipe(select(selectAuthLoading));
      const expected = cold('a', { a: loading });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAuthErrors', () => {
    it('returns the selected auth errors', () => {
      const selector = store.pipe(select(selectAuthErrors));
      const expected = cold('a', { a: errors });
      expect(selector).toBeObservable(expected);
    });
  });
});
