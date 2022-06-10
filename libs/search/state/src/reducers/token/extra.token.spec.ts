import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffSearchReducersState } from '@daffodil/search/state';

import {
  daffSearchProvideExtraReducers,
  DAFF_SEARCH_EXTRA_REDUCERS,
} from './extra.token';

describe('daffSearchProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffSearchReducersState>[];
  let result: ActionReducer<DaffSearchReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffSearchProvideExtraReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_SEARCH_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
