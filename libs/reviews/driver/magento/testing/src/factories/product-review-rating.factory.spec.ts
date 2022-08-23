import { TestBed } from '@angular/core/testing';

import { MagentoProductReviewRating } from '@daffodil/reviews/driver/magento';

import { MagentoProductReviewRatingFactory } from './product-review-rating.factory';

describe('@daffodil/reviews/driver/magento/testing | MagentoProductReviewRatingFactory', () => {
  let factory: MagentoProductReviewRatingFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoProductReviewRatingFactory],
    });

    factory = TestBed.inject(MagentoProductReviewRatingFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoProductReviewRating;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.name).toBeDefined();
      expect(result.value).toBeDefined();
    });
  });
});
