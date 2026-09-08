import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffAuthStateRootSlice,
  DaffAuthReducerState,
  DAFF_AUTH_STORE_FEATURE_KEY,
  daffAuthReducers,
  daffAuthInitialState,
} from '@daffodil/auth/state';
import { DaffStateError } from '@daffodil/core/state';

import { daffAuthSelectorFactory } from './auth.selector';

describe('@daffodil/auth/state | daffAuthSelectorFactory', () => {
  let store: Store<DaffAuthStateRootSlice>;
  let scheduler: TestScheduler;

  let state: DaffAuthReducerState;
  let loading: boolean;
  let errors: DaffStateError[];
  let loggedIn: boolean;

  const {
    selectAuthState,
    selectAuthLoggedIn,
  } = daffAuthSelectorFactory();

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

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
    loggedIn = false;
    state = {
      ...daffAuthInitialState,
      loggedIn,
    };
  });

  describe('selectAuthState', () => {
    it('selects the auth state', () => {
      const selector = store.pipe(select(selectAuthState));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: state });
      });
    });
  });

  describe('selectAuthLoggedIn', () => {
    it('returns the logged in state', () => {
      const selector = store.pipe(select(selectAuthLoggedIn));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: loggedIn });
      });
    });
  });
});
