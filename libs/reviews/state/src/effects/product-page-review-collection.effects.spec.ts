import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  daffCollectionBuildRequestFromMetadata,
  DaffCollectionRequest,
  DaffError,
  DaffInheritableError,
  DaffSortDirectionEnum,
} from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';
import { MockDaffCollectionFacade } from '@daffodil/core/state/testing';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductStateTestingModule,
  MockDaffProductPageFacade,
} from '@daffodil/product/state/testing';
import {
  DaffProductFactory,
  DaffProductTestingModule,
} from '@daffodil/product/testing';
import { DaffProductReviews } from '@daffodil/reviews';
import {
  DaffProductReviewsServiceInterface,
  DaffReviewsDriver,
} from '@daffodil/reviews/driver';
import { DaffReviewsTestingDriverModule } from '@daffodil/reviews/driver/testing';
import {
  DaffReviewsCollectionChangeCurrentPage,
  DaffReviewsCollectionChangePageSize,
  DaffReviewsCollectionChangeSortingOption,
  DaffReviewsProductListFailure,
  DaffReviewsProductListSuccess,
} from '@daffodil/reviews/state';
import { DaffReviewsStateTestingModule } from '@daffodil/reviews/state/testing';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import { DaffProductReviewCollectionEffects } from './product-page-review-collection.effects';

class MockError extends DaffInheritableError implements DaffError {
  code = 'code';

  constructor() {
    super('message');
  }
}

describe('@daffodil/reviews/state | DaffProductReviewCollectionEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffProductReviewCollectionEffects;
  let collectionFacade: MockDaffCollectionFacade;
  let facade: MockDaffProductPageFacade;
  let driverSpy: jasmine.Spy<DaffProductReviewsServiceInterface['list']>;

  let reviewsFactory: DaffProductReviewsFactory;
  let productFactory: DaffProductFactory;

  let mockProduct: DaffProduct;
  let mockReviews: DaffProductReviews;

  const testDriverSuccess = (cb: () => Action) => {
    describe('throttling the request', () => {
      it('should call immediately, but throttle subsequent events within a specified timeframe, firing off the last event after throttle', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        const request = daffCollectionBuildRequestFromMetadata(mockReviews.metadata);

        driverSpy.and.returnValue(of(mockReviews));

        collectionFacade.metadata$.next(mockReviews.metadata);

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a-a-a-a-a', { a: cb() });

          const expectedMarble = '--a 299ms a';
          const expectedValue = {
            a: new DaffReviewsProductListSuccess(mockReviews),
          };

          expectObservable(
            effects.update$(300, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });

        expect(driverSpy).toHaveBeenCalledWith(mockProduct.id, request);
      });
    });

    describe('and the driver call succeeds', () => {
      it('should call the driver with filter requests merged with state', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        const request = daffCollectionBuildRequestFromMetadata(mockReviews.metadata);

        driverSpy.and.returnValue(of(mockReviews));

        collectionFacade.metadata$.next(mockReviews.metadata);

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: cb() });

          const expectedMarble = '--a';
          const expectedValue = {
            a: new DaffReviewsProductListSuccess(mockReviews),
          };

          expectObservable(
            effects.update$(0, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });

        expect(driverSpy).toHaveBeenCalledWith(mockProduct.id, request);
      });
    });
  };

  const testDriverFailure = (cb: () => Action) => {
    describe('and the driver call fails', () => {
      it('should emit DaffCategoryPageLoadFailure with the transformed error', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        const request = daffCollectionBuildRequestFromMetadata(mockReviews.metadata);

        collectionFacade.metadata$.next(mockReviews.metadata);

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: cb() });

          const error = new MockError();
          driverSpy.and.returnValue(hot('#', {}, error));

          const expectedMarble = '--(a)';
          const expectedValue = {
            a: new DaffReviewsProductListFailure(daffTransformErrorToStateError(error)),
          };

          expectObservable(
            effects.update$(0, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });

        expect(driverSpy).toHaveBeenCalledWith(mockProduct.id, request);
      });
    });
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
        DaffProductStateTestingModule,
        DaffReviewsStateTestingModule,
        DaffReviewsTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffProductReviewCollectionEffects,
        provideMockActions(() => actions$),
      ],
    });

    collectionFacade = TestBed.inject(MockDaffCollectionFacade);
    facade = TestBed.inject(MockDaffProductPageFacade);
    effects = TestBed.inject(DaffProductReviewCollectionEffects);

    driverSpy = spyOn(TestBed.inject(DaffReviewsDriver), 'list');

    reviewsFactory = TestBed.inject(DaffProductReviewsFactory);
    productFactory = TestBed.inject(DaffProductFactory);

    mockReviews = reviewsFactory.create();
    mockProduct = productFactory.create();
    facade.product$.next(mockProduct);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when changePageSize is triggered', () => {
    let action: DaffReviewsCollectionChangePageSize;

    beforeEach(() => {
      action = new DaffReviewsCollectionChangePageSize(5);
    });

    testDriverSuccess(() => action);
    testDriverFailure(() => action);
  });

  describe('when changeCurrentPage is triggered', () => {
    let action: DaffReviewsCollectionChangeCurrentPage;

    beforeEach(() => {
      action = new DaffReviewsCollectionChangeCurrentPage(5);
    });

    testDriverSuccess(() => action);
    testDriverFailure(() => action);
  });

  describe('when changeSorting is triggered', () => {
    let action: DaffReviewsCollectionChangeSortingOption;

    beforeEach(() => {
      action = new DaffReviewsCollectionChangeSortingOption({
        option: 'option',
        direction: DaffSortDirectionEnum.Ascending,
      });
    });

    testDriverSuccess(() => action);
    testDriverFailure(() => action);
  });
});
