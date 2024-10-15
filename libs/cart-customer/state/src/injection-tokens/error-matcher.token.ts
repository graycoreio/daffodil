import { createSingleInjectionToken } from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

export const {
  /**
   * Transforms `DaffError`s into `DaffStateError`s before they are serialized into state.
   * Can be used to further refine Daffodil errors into more specific app errors.
   */
  token: DAFF_CART_CUSTOMER_ERROR_MATCHER,
  provider: provideDaffCartCustomerErrorMatcher,
} = createSingleInjectionToken<typeof daffTransformErrorToStateError>(
  'DAFF_CART_CUSTOMER_ERROR_MATCHER',
  { factory: () => daffTransformErrorToStateError },
);
