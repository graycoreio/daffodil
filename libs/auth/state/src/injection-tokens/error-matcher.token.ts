import { createSingleInjectionToken } from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

export const {
  /**
   * Transforms `DaffError`s into `DaffStateError`s before they are serialized into state.
   * Can be used to further refine Daffodil errors into more specific app errors.
   */
  token: DAFF_AUTH_ERROR_MATCHER,
  /**
   * Provider function for {@link DAFF_AUTH_ERROR_MATCHER}.
   */
  provider: provideDaffAuthErrorMatcher,
} = createSingleInjectionToken<typeof daffTransformErrorToStateError>(
  'DAFF_AUTH_ERROR_MATCHER',
  { factory: () => daffTransformErrorToStateError },
);
