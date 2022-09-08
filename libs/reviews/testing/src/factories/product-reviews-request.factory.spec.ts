import { TestBed } from '@angular/core/testing';

import { DaffProductTestingModule } from '@daffodil/product/testing';
import { DaffProductReviewsCollectionRequest } from '@daffodil/reviews';

import { DaffProductReviewsCollectionRequestFactory } from './product-reviews-request.factory';

describe('@daffodil/reviews/testing | DaffProductReviewsCollectionRequestFactory', () => {
  let factory: DaffProductReviewsCollectionRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
    });

    factory = TestBed.inject(DaffProductReviewsCollectionRequestFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffProductReviewsCollectionRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should define all required fields', () => {
      expect(result.appliedFilter).toBeDefined();
    });
  });
});
