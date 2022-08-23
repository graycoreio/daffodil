import { DaffIdentifiable } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';

import { DaffProductReviewCustomer } from './product-review-customer.interface';
import { DaffReviewRating } from './rating.interface';

export interface DaffProductReview extends DaffIdentifiable {
  /**
   * The overall rating of the product.
   */
  overallRating: number;

  /**
   * A list of rating that apply to specific aspects of the product.
   */
  ratings: DaffReviewRating[];

  /**
   * The ID of the product that this review targets.
   */
  productId: DaffProduct['id'];

  /**
   * The date when this review was submitted in ISO 8601 format.
   */
  createdAt: string;

  /**
   * The customer that wrote the review.
   */
  customer: DaffProductReviewCustomer;

  /**
   * The title of the review.
   */
  title: string;

  /**
   * The full text body of the review.
   */
  body: string;
}
