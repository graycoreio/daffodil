import { TestBed } from '@angular/core/testing';

import { DaffProductTestingModule } from '@daffodil/product/testing';
import { DaffReviewedProduct } from '@daffodil/reviews';

import { DaffReviewedProductFactory } from './reviewed-product.factory';

describe('@daffodil/reviews/testing | DaffReviewedProductFactory', () => {
  let factory: DaffReviewedProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
    });

    factory = TestBed.inject(DaffReviewedProductFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffReviewedProduct;

    beforeEach(() => {
      result = factory.create();
    });

    it('should define all required fields', () => {
      expect(result.aggregateReview).toBeDefined();
      expect(result.reviewCount).toBeDefined();
    });
  });
});
