import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffProductReducersState } from '@daffodil/product/state';

import {
  daffProductProvideExtraReducers,
  DAFF_PRODUCT_EXTRA_REDUCERS,
} from './extra.token';

describe('daffProductProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffProductReducersState>[];
  let result: ActionReducer<DaffProductReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProductProvideExtraReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
