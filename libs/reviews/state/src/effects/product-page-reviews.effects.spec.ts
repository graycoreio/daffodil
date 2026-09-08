import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

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
  let scheduler: TestScheduler;

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

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when ReviewsProductListAction is triggered', () => {

    const reviewsListAction = new DaffReviewsProductList(productId);

    describe('and the call to ProductService is successful', () => {
      beforeEach(() => {
        spyOn(driver, 'list').and.returnValue(of(mockProductReviews));
      });

      it('should dispatch a ProductLoadSuccess action', () => {
        const reviewsListSuccessAction = new DaffReviewsProductListSuccess(mockProductReviews);
        scheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: reviewsListAction });
          expectObservable(effects.list$).toBe('--b', { b: reviewsListSuccessAction });
        });
      });
    });

    describe('and the call to ProductService fails', () => {

      it('should dispatch a ProductLoadFailure action', () => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load product reviews' };
        const reviewsListFailureAction = new DaffReviewsProductListFailure(error);
        scheduler.run(({ hot, cold, expectObservable }) => {
          const response = cold<any>('#', {}, error);
          spyOn(driver, 'list').and.returnValue(response);
          actions$ = hot('--a', { a: reviewsListAction });
          expectObservable(effects.list$).toBe('--b', { b: reviewsListFailureAction });
        });
      });
    });
  });
});
