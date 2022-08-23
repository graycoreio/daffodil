import { DaffCollection } from '@daffodil/core';

import { DaffProductReview } from './product-review.interface';

export type DaffProductReviews<T extends DaffProductReview = DaffProductReview> = DaffCollection<T>;
