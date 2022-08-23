import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffProductReview } from '@daffodil/reviews';

/**
 * A facade for getting a particular product review.
 */
export interface DaffProductReviewsFacadeInterface<T extends DaffProductReview = DaffProductReview> extends DaffStoreFacade<Action> {
  /**
   * Get a product.
   *
   * @param id a product id
   */
  getProductReview(id: T['id']): Observable<T>;
}
