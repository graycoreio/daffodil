import { createSingleInjectionToken } from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

export const {
  /**
   * Transforms {@link DaffError}s into {@link DaffStateError}s before they are serialized into state.
   * Can be used to further refine Daffodil errors into more specific app errors.
   */
  token: DAFF_REVIEWS_ERROR_MATCHER,
  /**
   * Provider function for {@link DAFF_REVIEWS_ERROR_MATCHER}.
   */
  provider: provideDaffReviewsErrorMatcher,
} = createSingleInjectionToken<typeof daffTransformErrorToStateError>(
  'DAFF_REVIEWS_ERROR_MATCHER',
  { factory: () => daffTransformErrorToStateError },
);
