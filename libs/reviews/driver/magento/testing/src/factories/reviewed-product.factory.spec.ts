import { TestBed } from '@angular/core/testing';

import { MagentoReviewedProduct } from '@daffodil/reviews/driver/magento';

import { MagentoReviewedProductFactory } from './reviewed-product.factory';

describe('@daffodil/reviews/driver/magento/testing | MagentoReviewedProductFactory', () => {
  let factory: MagentoReviewedProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoReviewedProductFactory],
    });

    factory = TestBed.inject(MagentoReviewedProductFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoReviewedProduct;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.sku).toBeDefined();
      expect(result.rating_summary).toBeDefined();
      expect(result.review_count).toBeDefined();
    });
  });
});
