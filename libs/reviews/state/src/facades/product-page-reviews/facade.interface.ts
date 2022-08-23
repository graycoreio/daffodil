import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffStateError,
  DaffStoreFacade,
} from '@daffodil/core/state';
import { DaffProductReview } from '@daffodil/reviews';

/**
 * A facade for getting state about the reviews on a product page.
 */
export interface DaffProductPageReviewsFacadeInterface<T extends DaffProductReview = DaffProductReview> extends DaffStoreFacade<Action> {
  /**
   * Whether the product reviews are loading.
   */
  loading$: Observable<boolean>;

  /**
   * Product page review errors.
   */
  errors$: Observable<DaffStateError[]>;

  /**
   * The reviews for the current product page.
   */
  productReviews$: Observable<T[]>;
}
