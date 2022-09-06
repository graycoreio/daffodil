import { TestBed } from '@angular/core/testing';

import { DaffProductTestingModule } from '@daffodil/product/testing';
import { DaffProductReviewsMetadata } from '@daffodil/reviews';

import { DaffProductReviewsMetadataFactory } from './product-reviews-metadata.factory';

describe('@daffodil/reviews/testing | DaffProductReviewsMetadataFactory', () => {
  let factory: DaffProductReviewsMetadataFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
    });

    factory = TestBed.inject(DaffProductReviewsMetadataFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffProductReviewsMetadata;

    beforeEach(() => {
      result = factory.create();
    });

    it('should define all required fields', () => {
      expect(result.filter).toBeDefined();
    });
  });
});
