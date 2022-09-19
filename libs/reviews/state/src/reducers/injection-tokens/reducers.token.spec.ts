import { TestBed } from '@angular/core/testing';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import {
  daffCollectionReducerInitialState,
  daffIdentityReducer,
} from '@daffodil/core/state';
import { DaffProductReviews } from '@daffodil/reviews';
import {
  DaffReviewsProductListSuccess,
  daffReviewsProvideExtraReducers,
  DaffReviewsReducersState,
  daffProductReviewEntitiesAdapter,
  daffProductReviewsReducerInitialState,
} from '@daffodil/reviews/state';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import { DAFF_REVIEWS_REDUCERS } from './reducers.token';

describe('@daffodil/reviews/state | DAFF_REVIEWS_REDUCERS', () => {
  let productReviewsFactory: DaffProductReviewsFactory;
  let mockProductReviews: DaffProductReviews;

  let extraReducer: ActionReducer<DaffReviewsReducersState>;
  let reducer: ActionReducer<DaffReviewsReducersState>;
  let injectedId: string;
  let result: DaffReviewsReducersState;

  beforeEach(() => {
    injectedId = 'the injected ID';
    const initialState: DaffReviewsReducersState = {
      productReviewsCollection: daffCollectionReducerInitialState,
      productReviewEntities: daffProductReviewEntitiesAdapter().getInitialState(),
      productReviews: daffProductReviewsReducerInitialState,
    };
    extraReducer = combineReducers<DaffReviewsReducersState>({
      productReviewsCollection: (state, action) => ({
        ...state,
        ids: [
          ...state.ids,
          injectedId,
        ],
      }),
      productReviewEntities: daffIdentityReducer,
      productReviews: daffIdentityReducer,
    });

    TestBed.configureTestingModule({
      providers: [
        ...daffReviewsProvideExtraReducers(extraReducer),
      ],
    });

    productReviewsFactory = TestBed.inject(DaffProductReviewsFactory);
    reducer = TestBed.inject(DAFF_REVIEWS_REDUCERS);

    mockProductReviews = productReviewsFactory.create();

    result = reducer(initialState, new DaffReviewsProductListSuccess(mockProductReviews));
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.productReviewsCollection.ids[result.productReviewsCollection.ids.length - 1]).toEqual(injectedId);
  });

  it('should keep pieces of state not covered by extra reducers', () => {
    expect(result.productReviewEntities.entities).toBeTruthy();
  });
});
