import { TestBed } from '@angular/core/testing';
import {
  MetaReducer,
  StoreConfig,
} from '@ngrx/store';

import {
  DaffReviewsReducersState,
  daffReviewsProvideMetaReducers,
} from '@daffodil/reviews/state';

import { DAFF_REVIEWS_STORE_CONFIG } from './config.token';

describe('daffReviewsProvideMetaReducers', () => {
  let metaReducers: MetaReducer<DaffReviewsReducersState>[];
  let config: StoreConfig<DaffReviewsReducersState>;

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

    config = TestBed.inject(DAFF_REVIEWS_STORE_CONFIG);
  });

  it('should return the meta-reducers', () => {
    expect(config.metaReducers).toEqual(metaReducers);
  });
});
