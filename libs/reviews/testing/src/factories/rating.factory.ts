import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffReviewRating } from '@daffodil/reviews';

/**
 * Mocked {@link DaffReviewRating} object.
 */
export class MockReviewRating implements DaffReviewRating {
  value = faker.datatype.number({ min: 1, max: 100 });
  label = faker.random.word();
}

/**
 * Factory for creating {@link DaffReviewRating}s.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffReviewRatingFactory extends DaffModelFactory<DaffReviewRating>{
  constructor() {
    super(MockReviewRating);
  }
}
