import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffAuthToken } from '@daffodil/auth';
import {
  DaffAuthLoginReducerState,
  DAFF_AUTH_STORE_FEATURE_KEY,
  daffAuthReducers,
  DaffAuthLoginSuccess,
  DaffAuthStateRootSlice,
} from '@daffodil/auth/state';
import { DaffAuthTokenFactory } from '@daffodil/auth/testing';
import { DaffStateError } from '@daffodil/core/state';

import { getDaffAuthLoginSelectors } from './login.selector';

describe('@daffodil/auth/state | getDaffAuthLoginSelectors', () => {
  let store: Store<DaffAuthStateRootSlice>;

  const authTokenFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let state: DaffAuthLoginReducerState;
  let loading: boolean;
  let errors: DaffStateError[];
  let token: string;
  let mockAuthToken: DaffAuthToken;

  const {
    selectAuthLoginState,
    selectAuthLoginLoading,
    selectAuthLoginErrors,
  } = getDaffAuthLoginSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_AUTH_STORE_FEATURE_KEY]: combineReducers(daffAuthReducers),
        }),
      ],
    });

    store = TestBed.inject(Store);

    mockAuthToken = authTokenFactory.create();

    loading = false;
    errors = [];
    token = mockAuthToken.token;
    state = {
      loading,
      errors,
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
