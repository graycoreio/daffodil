import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import {
  DaffAuthFeatureState,
  daffAuthInitialState,
  DaffAuthCheck,
} from '@daffodil/auth/state';
import { DaffStateError } from '@daffodil/core/state';

import { daffAuthProvideExtraReducers } from './extra.token';
import { DAFF_AUTH_REDUCERS } from './reducers.token';

describe('daffAuthProvideExtraReducers', () => {
  let extraReducer: ActionReducer<DaffAuthFeatureState>;
  let reducer: ActionReducer<DaffAuthFeatureState>;
  let result: DaffAuthFeatureState;
  let error: DaffStateError;

  beforeEach(() => {
    error = {
      code: 'code',
      message: 'message',
    };
    const initialState: DaffAuthFeatureState = {
      auth: {
        ...daffAuthInitialState,
        daffErrors: [
          { code: '0', message: '0' },
        ],
      },
      login: null,
      register: null,
      resetPassword: null,
    };
    extraReducer = (state, action) => ({
      ...state,
      auth: {
        ...state.auth,
        daffErrors: [
          ...state.auth.daffErrors,
          error,
        ],
      },
    });

    TestBed.configureTestingModule({
      providers: [
        ...daffAuthProvideExtraReducers(extraReducer),
      ],
    });

    reducer = TestBed.inject(DAFF_AUTH_REDUCERS);

    result = reducer(initialState, new DaffAuthCheck());
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.auth.daffErrors[1]).toEqual(error);
  });
});
