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
  DaffAuthRegisterReducerState,
  DAFF_AUTH_STORE_FEATURE_KEY,
  daffAuthReducers,
} from '@daffodil/auth/state';
import { DaffStateError } from '@daffodil/core/state';

import { getDaffAuthRegisterSelectors } from './register.selector';

describe('@daffodil/auth/state | getDaffAuthRegisterSelectors', () => {
  let store: Store<DaffAuthStateRootSlice>;

  let state: DaffAuthRegisterReducerState;
  let loading: boolean;
  let errors: DaffStateError[];

  const {
    selectAuthRegisterState,
    selectAuthRegisterLoading,
    selectAuthRegisterErrors,
  } = getDaffAuthRegisterSelectors();

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
    state = {
      loading,
      errors,
    };
  });

  describe('selectAuthRegisterState', () => {
    it('selects the register state', () => {
      const selector = store.pipe(select(selectAuthRegisterState));
      const expected = cold('a', { a: state });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAuthRegisterLoading', () => {
    it('selects the loading state of the auth', () => {
      const selector = store.pipe(select(selectAuthRegisterLoading));
      const expected = cold('a', { a: loading });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAuthRegisterErrors', () => {
    it('returns the selected register errors', () => {
      const selector = store.pipe(select(selectAuthRegisterErrors));
      const expected = cold('a', { a: errors });
      expect(selector).toBeObservable(expected);
    });
  });
});
