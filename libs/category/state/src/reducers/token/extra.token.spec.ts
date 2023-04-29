import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffCategoryReducersState } from '@daffodil/category/state';

import {
  daffCategoryProvideExtraReducers,
  DAFF_CATEGORY_EXTRA_REDUCERS,
} from './extra.token';

describe('@daffodil/category/state | daffCategoryProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffCategoryReducersState>[];
  let result: ActionReducer<DaffCategoryReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffCategoryProvideExtraReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_CATEGORY_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
