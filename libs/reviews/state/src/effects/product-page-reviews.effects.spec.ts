import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import { DaffProductReviews } from '@daffodil/reviews';
import {
  DaffReviewsDriver,
  DaffProductReviewsServiceInterface,
} from '@daffodil/reviews/driver';
import { DaffReviewsTestingDriverModule } from '@daffodil/reviews/driver/testing';
import {
  DaffReviewsProductList,
  DaffReviewsProductListSuccess,
  DaffReviewsProductListFailure,
} from '@daffodil/reviews/state';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import { DaffProductPageReviewsEffects } from './product-page-reviews.effects';

describe('@daffodil/reviews/state | DaffProductPageReviewsEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffProductPageReviewsEffects;
  let mockProductReviews: DaffProductReviews;
  let driver: DaffProductReviewsServiceInterface;

  let productFactory: DaffProductReviewsFactory;
  let productId: DaffProduct['id'];

  beforeEach(() => {
    productId = 'product id';

    TestBed.configureTestingModule({
      imports: [
        DaffReviewsTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffProductPageReviewsEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffProductPageReviewsEffects);
    productFactory = TestBed.inject(DaffProductReviewsFactory);

    driver = TestBed.inject(DaffReviewsDriver);

    mockProductReviews = productFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when ReviewsProductListAction is triggered', () => {

    let expected;
    const reviewsListAction = new DaffReviewsProductList(productId);

    describe('and the call to ProductService is successful', () => {
      beforeEach(() => {
        spyOn(driver, 'list').and.returnValue(of(mockProductReviews));
        const reviewsListSuccessAction = new DaffReviewsProductListSuccess(mockProductReviews);
        actions$ = hot('--a', { a: reviewsListAction });
        expected = cold('--b', { b: reviewsListSuccessAction });
      });

      it('should dispatch a ProductLoadSuccess action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });

    describe('and the call to ProductService fails', () => {

      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load product reviews' };
        const response = cold('#', {}, error);
        spyOn(driver, 'list').and.returnValue(response);
        const reviewsListFailureAction = new DaffReviewsProductListFailure(error);
        actions$ = hot('--a', { a: reviewsListAction });
        expected = cold('--b', { b: reviewsListFailureAction });
      });

      it('should dispatch a ProductLoadFailure action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });
  });
});
