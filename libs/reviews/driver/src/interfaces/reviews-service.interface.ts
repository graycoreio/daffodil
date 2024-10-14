import { Observable } from 'rxjs';

import {
  DaffCollectionRequest,
  createSingleInjectionToken,
} from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductReview,
  DaffProductReviews,
} from '@daffodil/reviews';

export const {
  token: DaffReviewsDriver,
  provider: daffProvideReviewsDriver,
} = createSingleInjectionToken<DaffProductReviewsServiceInterface>('DaffReviewsDriver');

export interface DaffProductReviewsServiceInterface<T extends DaffProductReview = DaffProductReview> {
  /**
   * Retrieves the list of reviews for the given product.
   */
  list(productId: DaffProduct['id'], request?: DaffCollectionRequest): Observable<DaffProductReviews<T>>;
}
