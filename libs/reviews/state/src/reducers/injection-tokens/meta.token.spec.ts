import { TestBed } from '@angular/core/testing';
import { MetaReducer } from '@ngrx/store';

import { DaffReviewsReducersState } from '@daffodil/reviews/state';

import {
  daffReviewsProvideMetaReducers,
  DAFF_REVIEWS_META_REDUCERS,
} from './meta.token';

describe('daffReviewsProvideMetaReducers', () => {
  let metaReducers: MetaReducer<DaffReviewsReducersState>[];
  let result: MetaReducer<DaffReviewsReducersState>[];

  beforeEach(() => {
    metaReducers = [
      reducer => reducer,
      reducer => reducer,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffReviewsProvideMetaReducers(...metaReducers),
      ],
    });

    result = TestBed.inject(DAFF_REVIEWS_META_REDUCERS);
  });

  it('should provide the meta-reducers to the token', () => {
    metaReducers.forEach(metaReducer => {
      expect(result).toContain(metaReducer);
    });
  });
});
