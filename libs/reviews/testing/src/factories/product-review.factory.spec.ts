import { TestBed } from '@angular/core/testing';

import { DaffProductTestingModule } from '@daffodil/product/testing';
import { DaffProductReview } from '@daffodil/reviews';

import { DaffProductReviewFactory } from './product-review.factory';

describe('@daffodil/reviews/testing | DaffProductReviewFactory', () => {
  let factory: DaffProductReviewFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
    });

    factory = TestBed.inject(DaffProductReviewFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffProductReview;

    beforeEach(() => {
      result = factory.create();
    });

    it('should define all required fields', () => {
      expect(result.id).toBeDefined();
      expect(result.overallRating).toBeDefined();
      expect(result.ratings).toBeDefined();
      expect(result.productId).toBeDefined();
      expect(result.createdAt).toBeDefined();
      expect(result.customer).toBeDefined();
      expect(result.title).toBeDefined();
      expect(result.body).toBeDefined();
    });
  });
});
