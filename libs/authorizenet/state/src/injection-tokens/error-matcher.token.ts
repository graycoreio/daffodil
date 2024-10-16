import { createSingleInjectionToken } from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

/**
 * Transforms `DaffError`s into `DaffStateError`s before they are serialized into state.
 * Can be used to further refine Daffodil errors into more specific app errors.
 */
export const {
  token: DAFF_AUTHORIZENET_ERROR_MATCHER,
  /**
   * Provider function for {@link DAFF_AUTHORIZENET_ERROR_MATCHER}.
   */
  provider: provideDaffAuthorizenetErrorMatcher,
} = createSingleInjectionToken<typeof daffTransformErrorToStateError>(
  'DAFF_AUTHORIZENET_ERROR_MATCHER',
  { factory: () => daffTransformErrorToStateError },
);
