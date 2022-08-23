import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCollectionRequest } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductReview,
  DaffProductReviews,
} from '@daffodil/reviews';

export const DaffReviewsDriver = new InjectionToken<DaffProductReviewsServiceInterface>('DaffReviewsDriver');

export interface DaffProductReviewsServiceInterface<T extends DaffProductReview = DaffProductReview> {
  /**
   * Retrieves the list of reviews for the given product.
   */
  list(productId: DaffProduct['id'], request?: DaffCollectionRequest): Observable<DaffProductReviews<T>>;
}
