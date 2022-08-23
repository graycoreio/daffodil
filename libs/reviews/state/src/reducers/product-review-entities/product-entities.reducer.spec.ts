import { TestBed } from '@angular/core/testing';
import { EntityState } from '@ngrx/entity';

import {
  DaffProductReview,
  DaffProductReviews,
} from '@daffodil/reviews';
import {
  daffProductReviewEntitiesAdapter,
  DaffReviewsProductListSuccess,
} from '@daffodil/reviews/state';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import { daffReviewsProductEntitiesReducer } from './product-entities.reducer';


describe('@daffodil/reviews/state | daffReviewsProductEntitiesReducer', () => {
  let productReviewsFactory: DaffProductReviewsFactory;

  const initialState = daffProductReviewEntitiesAdapter().getInitialState();

  beforeEach(() => {
    productReviewsFactory = TestBed.inject(DaffProductReviewsFactory);
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffReviewsProductEntitiesReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when ReviewsProductListSuccessAction is triggered', () => {
    let productReviews: DaffProductReviews;
    let review: DaffProductReview;
    let result: EntityState<DaffProductReview>;

    beforeEach(() => {
      productReviews = productReviewsFactory.create();
      review = Object.values(productReviews.data)[0];

      const productPageLoadSuccess = new DaffReviewsProductListSuccess(productReviews);

      result = daffReviewsProductEntitiesReducer(initialState, productPageLoadSuccess);
    });

    it('sets expected product on state', () => {
      expect(result.entities[review.id]).toEqual(review);
    });
  });
});
