import { DaffCollectionMetadata } from '@daffodil/core';

/**
 * Represents metadata about a collection of product reviews.
 */
export interface DaffProductReviewsMetadata extends DaffCollectionMetadata {
  /**
   * Filter by the rating.
   */
  filter: number;
};
