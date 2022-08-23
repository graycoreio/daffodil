import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffReviewsReducersState } from '@daffodil/reviews/state';

import {
  daffReviewsProvideExtraReducers,
  DAFF_REVIEWS_EXTRA_REDUCERS,
} from './extra.token';

describe('@daffodil/reviews/state | daffReviewsProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffReviewsReducersState>[];
  let result: ActionReducer<DaffReviewsReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffReviewsProvideExtraReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_REVIEWS_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
