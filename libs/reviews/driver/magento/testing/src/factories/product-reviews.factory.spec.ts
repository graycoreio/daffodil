import { TestBed } from '@angular/core/testing';

import { MagentoProductReviews } from '@daffodil/reviews/driver/magento';

import { MagentoProductReviewsFactory } from './product-reviews.factory';

describe('@daffodil/reviews/driver/magento/testing | MagentoProductReviewsFactory', () => {
  let factory: MagentoProductReviewsFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoProductReviewsFactory],
    });

    factory = TestBed.inject(MagentoProductReviewsFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoProductReviews;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.items).toBeDefined();
      expect(result.page_info).toBeDefined();
    });
  });
});
