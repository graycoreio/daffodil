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

import {
  DaffResetPasswordLanding,
  daffAuthResetPasswordInitialState,
} from '../../public_api';
import { getDaffAuthResetPasswordSelectors } from './selector';

describe('@daffodil/auth/state | getDaffAuthResetPasswordSelectors', () => {
  let store: Store<DaffAuthStateRootSlice>;

  let state: DaffAuthResetPasswordReducerState;
  let loading: boolean;
  let errors: DaffStateError[];
  let token: string;

  const {
    selectAuthResetPasswordState,
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
      ...daffAuthResetPasswordInitialState,
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

  describe('selectAuthResetPasswordToken', () => {
    it('returns the reset password token', () => {
      store.dispatch(new DaffResetPasswordLanding(token));
      const selector = store.pipe(select(selectAuthResetPasswordToken));
      const expected = cold('a', { a: token });
      expect(selector).toBeObservable(expected);
    });
  });
});
