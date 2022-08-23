import { DaffStateError } from '@daffodil/core/state';

/**
 * The state for a product page's reviews.
 */
export interface DaffProductPageReviewsReducerState {
  /**
   * Whether the product page reviews are loading.
   */
  loading: boolean;
  /**
   * Errors associated with loading product page reviews.
   */
  errors: DaffStateError[];
}
