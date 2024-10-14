import { createSingleInjectionToken } from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

export const {
  /**
   * Transforms `DaffError`s into `DaffStateError`s before they are serialized into state.
   * Can be used to further refine Daffodil errors into more specific app errors.
   */
  token: DAFF_CONTENT_ERROR_MATCHER,
  /**
   * Provider for {@link DAFF_CONTENT_ERROR_MATCHER}.
   */
  provider: provideDaffContentErrorMatcher,
} = createSingleInjectionToken<typeof daffTransformErrorToStateError>('DAFF_CONTENT_ERROR_MATCHER');
