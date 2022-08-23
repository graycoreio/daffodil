import { TestBed } from '@angular/core/testing';

import { MagentoProductReview } from '@daffodil/reviews/driver/magento';

import { MagentoProductReviewFactory } from './product-review.factory';

describe('@daffodil/reviews/driver/magento/testing | MagentoProductReviewFactory', () => {
  let factory: MagentoProductReviewFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoProductReviewFactory],
    });

    factory = TestBed.inject(MagentoProductReviewFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoProductReview;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.average_rating).toBeDefined();
      expect(result.created_at).toBeDefined();
      expect(result.nickname).toBeDefined();
      expect(result.ratings_breakdown).toBeDefined();
      expect(result.summary).toBeDefined();
      expect(result.text).toBeDefined();
      expect(result.product.sku).toBeDefined();
    });
  });
});
