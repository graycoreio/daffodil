import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoProductReviewRating } from '@daffodil/reviews/driver/magento';

export class MockMagentoProductReviewRating implements MagentoProductReviewRating {
  __typename = <const>'ProductReviewRating';
  name = faker.lorem.word();
  value = String(faker.number.int({ min: 0, max: 100 }));
}

@Injectable({
  providedIn: 'root',
})
export class MagentoProductReviewRatingFactory extends DaffModelFactory<MagentoProductReviewRating> {
  constructor() {
    super(MockMagentoProductReviewRating);
  }
}
