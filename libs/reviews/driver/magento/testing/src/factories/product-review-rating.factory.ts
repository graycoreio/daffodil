import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoProductReviewRating } from '@daffodil/reviews/driver/magento';

export class MockMagentoProductReviewRating implements MagentoProductReviewRating {
  __typename: 'ProductReviewRating' = 'ProductReviewRating';
  name = faker.random.word();
  value = String(faker.datatype.number({ min: 0, max: 100 }));
}

@Injectable({
  providedIn: 'root',
})
export class MagentoProductReviewRatingFactory extends DaffModelFactory<MagentoProductReviewRating> {
  constructor() {
    super(MockMagentoProductReviewRating);
  }
}
