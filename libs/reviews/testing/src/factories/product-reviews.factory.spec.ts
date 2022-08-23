import { TestBed } from '@angular/core/testing';

import { DaffProductTestingModule } from '@daffodil/product/testing';
import { DaffProductReviews } from '@daffodil/reviews';

import { DaffProductReviewsFactory } from './product-reviews.factory';

describe('@daffodil/reviews/testing | DaffProductReviewsFactory', () => {
  let factory: DaffProductReviewsFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
    });

    factory = TestBed.inject(DaffProductReviewsFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffProductReviews;

    beforeEach(() => {
      result = factory.create();
    });

    it('should define all required fields', () => {
      expect(result.metadata).toBeDefined();
      expect(result.data).toBeDefined();
    });
  });
});
