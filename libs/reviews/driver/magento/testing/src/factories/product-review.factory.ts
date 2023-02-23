import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoProductReview,
  MagentoProductReviewRating,
} from '@daffodil/reviews/driver/magento';

import { MagentoProductReviewRatingFactory } from './product-review-rating.factory';

export class MockMagentoProductReview implements MagentoProductReview {
  __typename: 'ProductReview' = 'ProductReview';
  summary = faker.random.words(5);
  text = faker.random.words(15);
  average_rating = faker.datatype.number({ min: 0, max: 100 });
  created_at = faker.date.past().toISOString();
  nickname = faker.name.firstName();
  ratings_breakdown = this.createRatings();

  constructor(
    protected ratingFactory: MagentoProductReviewRatingFactory,
  ) {}

  private createRatings(): MagentoProductReviewRating[] {
    return this.ratingFactory.createMany(faker.datatype.number({ min: 3, max: 5 }));
  }
}

@Injectable({
  providedIn: 'root',
})
export class MagentoProductReviewFactory extends DaffModelFactory<MagentoProductReview> {
  constructor(
    ratingFactory: MagentoProductReviewRatingFactory,
  ) {
    super(MockMagentoProductReview, ratingFactory);
  }
}
