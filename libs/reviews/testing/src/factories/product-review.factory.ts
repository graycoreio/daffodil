import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffProductReview,
  DaffProductReviewCustomer,
  DaffReviewRating,
} from '@daffodil/reviews';

import { DaffProductReviewCustomerFactory } from './product-review-customer.factory';
import { DaffReviewRatingFactory } from './rating.factory';

/**
 * Mocked {@link DaffProductReview} object.
 */
export class MockProductReview implements DaffProductReview {
  overallRating = faker.number.int({ min: 1, max: 100 });
  id = faker.string.uuid();
  productId = faker.string.uuid();
  createdAt = faker.date.past({ years: 10 }).toISOString();
  title = faker.lorem.word();
  body = faker.lorem.words(10);

  ratings = this.createRatings();
  customer = this.createCustomer();

  constructor(
    protected ratingFactory: DaffReviewRatingFactory,
    protected customerFactory: DaffProductReviewCustomerFactory,
  ) {}

  private createRatings(): DaffReviewRating[] {
    return this.ratingFactory.createMany(faker.number.int({ min: 3, max: 5 }));
  }

  private createCustomer(): DaffProductReviewCustomer {
    return this.customerFactory.create();
  }
}

/**
 * Factory for creating DaffProductReviews.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductReviewFactory extends DaffModelFactory<DaffProductReview>{
  constructor(
    ratingFactory: DaffReviewRatingFactory,
    customerFactory: DaffProductReviewCustomerFactory,
  ) {
    super(MockProductReview, ratingFactory, customerFactory);
  }
}
