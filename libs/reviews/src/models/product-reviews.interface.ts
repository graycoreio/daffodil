import { DaffCollection } from '@daffodil/core';

import { DaffProductReview } from './product-review.interface';

/**
 * A collection of product reviews.
 */
export type DaffProductReviews<T extends DaffProductReview = DaffProductReview> = DaffCollection<T>;
