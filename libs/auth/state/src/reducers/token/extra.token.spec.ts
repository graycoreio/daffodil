import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffAuthFeatureState } from '@daffodil/auth/state';

import {
  daffAuthProvideExtraReducers,
  DAFF_AUTH_EXTRA_REDUCERS,
} from './extra.token';

describe('daffAuthProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffAuthFeatureState>[];
  let result: ActionReducer<DaffAuthFeatureState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffAuthProvideExtraReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_AUTH_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
