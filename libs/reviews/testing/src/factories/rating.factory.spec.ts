import { TestBed } from '@angular/core/testing';

import { DaffProductTestingModule } from '@daffodil/product/testing';
import { DaffReviewRating } from '@daffodil/reviews';

import { DaffReviewRatingFactory } from './rating.factory';

describe('@daffodil/reviews/testing | DaffReviewRatingFactory', () => {
  let factory: DaffReviewRatingFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
    });

    factory = TestBed.inject(DaffReviewRatingFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffReviewRating;

    beforeEach(() => {
      result = factory.create();
    });

    it('should define all required fields', () => {
      expect(result.label).toBeDefined();
      expect(result.value).toBeDefined();
    });
  });
});
