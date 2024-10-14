import { createSingleInjectionToken } from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

export const {
  /**
   * Transforms {@link DaffError}s into {@link DaffStateError}s before they are serialized into state.
   * Can be used to further refine Daffodil errors into more specific app errors.
   */
  token: DAFF_PRODUCT_ERROR_MATCHER,
  provider: daffProvideProductErrorMatcher,
} = createSingleInjectionToken<typeof daffTransformErrorToStateError>(
  'DAFF_PRODUCT_ERROR_MATCHER',
  { factory: () => daffTransformErrorToStateError },
);
