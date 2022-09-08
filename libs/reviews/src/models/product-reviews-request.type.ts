import { DaffCollectionRequest } from '@daffodil/core';

/**
 * Represents the request that can be made for a collection of product reviews.
 */
export interface DaffProductReviewsCollectionRequest extends DaffCollectionRequest {
  /**
   * The rating filter.
   */
  appliedFilter?: number;
}
