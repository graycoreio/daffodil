import { Observable } from 'rxjs';

import {
  DaffCollectionRequest,
  createSingletonInjectionToken,
} from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductReview,
  DaffProductReviews,
} from '@daffodil/reviews';

export const {
  token: DaffReviewsDriver,
  provider: provideDaffReviewsDriver,
} = createSingletonInjectionToken<DaffProductReviewsServiceInterface>('DaffReviewsDriver');

export interface DaffProductReviewsServiceInterface<T extends DaffProductReview = DaffProductReview> {
  /**
   * Retrieves the list of reviews for the given product.
   */
  list(productId: DaffProduct['id'], request?: DaffCollectionRequest): Observable<DaffProductReviews<T>>;
}
