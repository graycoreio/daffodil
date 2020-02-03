import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffAuthFactory
} from '@daffodil/auth/testing';

import { DaffAuthLoginSuccess } from '../actions/auth.actions';
import { selectAuthToken, selectAuthLoading, selectAuthErrors } from './auth.selector';
import { AuthReducersState } from '../reducers/auth-reducers.interface';
import { authReducers } from '../reducers/auth-reducers';
import { DaffAuth } from '../models/auth';

describe('DaffAuthSelectors', () => {
  let store: Store<AuthReducersState>;

  const authFactory: DaffAuthFactory = new DaffAuthFactory();

  let loading: boolean;
  let errors: string[];
  let token: string;
  let mockAuth: DaffAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          auth: combineReducers(authReducers),
        })
      ]
    });

    store = TestBed.get(Store);

    mockAuth = authFactory.create();

    loading = false;
    errors = [];
    token = mockAuth.token;

    store.dispatch(new DaffAuthLoginSuccess(mockAuth));
  });

  describe('selectAuthToken', () => {

    it('selects the auth token', () => {
      const selector = store.pipe(select(selectAuthToken));
      const expected = cold('a', { a: token });
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
