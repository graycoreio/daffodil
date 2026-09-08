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
  DaffAuthResetPasswordReducerState,
  DAFF_AUTH_STORE_FEATURE_KEY,
  daffAuthReducers,
} from '@daffodil/auth/state';
import { DaffStateError } from '@daffodil/core/state';

import { daffAuthResetPasswordSelectorFactory } from './selector';
import {
  DaffResetPasswordLanding,
  daffAuthResetPasswordInitialState,
} from '../../public_api';

describe('@daffodil/auth/state | daffAuthResetPasswordSelectorFactory', () => {
  let store: Store<DaffAuthStateRootSlice>;
  let scheduler: TestScheduler;

  let state: DaffAuthResetPasswordReducerState;
  let loading: boolean;
  let errors: DaffStateError[];
  let token: string;

  const {
    selectAuthResetPasswordState,
    selectAuthResetPasswordToken,
  } = daffAuthResetPasswordSelectorFactory();

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
    token = 'token';
    state = {
      ...daffAuthResetPasswordInitialState,
      token,
    };
  });

  describe('selectAuthResetPasswordState', () => {
    it('selects the register state', () => {
      store.dispatch(new DaffResetPasswordLanding(token));
      const selector = store.pipe(select(selectAuthResetPasswordState));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: state });
      });
    });
  });

  describe('selectAuthResetPasswordToken', () => {
    it('returns the reset password token', () => {
      store.dispatch(new DaffResetPasswordLanding(token));
      const selector = store.pipe(select(selectAuthResetPasswordToken));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: token });
      });
    });
  });
});
