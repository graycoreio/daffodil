import { TestBed } from '@angular/core/testing';

import { DaffCollectionMetadataFactory } from '@daffodil/core/testing';
import { runMarbles } from '@daffodil/jasmine';
import { DaffProduct } from '@daffodil/product';
import { DaffProductReviews } from '@daffodil/reviews';
import {
  DaffProductReviewFactory,
  DaffProductReviewsFactory,
} from '@daffodil/reviews/testing';

import { DaffReviewsTestingService } from './reviews.service';

describe('@daffodil/reviews/driver/testing | DaffReviewsTestingService', () => {
  let service: DaffReviewsTestingService;

  let countryCreateSpy: jasmine.Spy;

  let reviewsFactory: DaffProductReviewsFactory;
  let reviewsFactoryService: DaffProductReviewsFactory;

  let mockReviews: DaffProductReviews;
  let productId: DaffProduct['id'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffReviewsTestingService,
      ],
    });

    service = TestBed.inject(DaffReviewsTestingService);
    reviewsFactoryService = TestBed.inject(DaffProductReviewsFactory);

    reviewsFactory = new DaffProductReviewsFactory(
      TestBed.inject(DaffProductReviewFactory),
      TestBed.inject(DaffCollectionMetadataFactory),
    );

    mockReviews = reviewsFactory.create();
    productId = 'productId';

    countryCreateSpy = spyOn(reviewsFactoryService, 'create');
    countryCreateSpy.and.returnValue(mockReviews);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list', () => {
    it('should return a reviews collection', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(service.list(productId)).toBe('(a|)', { a: mockReviews });
      });
    });
  });
});
