import { DaffCollection } from '@daffodil/core';

import { DaffProductReview } from './product-review.interface';
import { DaffProductReviewsMetadata } from './product-reviews-metadata.interface';

/**
 * A collection of product reviews.
 */
export interface DaffProductReviews<T extends DaffProductReview = DaffProductReview> extends DaffCollection<T> {
  /**
   * The collection metadata contains extra info about the collection,
   * e.g. sorting, filtering, and pagination.
   */
  metadata: DaffProductReviewsMetadata;
};
