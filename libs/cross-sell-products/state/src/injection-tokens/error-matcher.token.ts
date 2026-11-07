import { createSingleInjectionToken } from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

export const {
  token: DAFF_CROSS_SELL_PRODUCTS_ERROR_MATCHER,
  provider: provideDaffCrossSellProductsErrorMatcher,
} = createSingleInjectionToken<typeof daffTransformErrorToStateError>(
  'DAFF_CROSS_SELL_PRODUCTS_ERROR_MATCHER',
  { factory: () => daffTransformErrorToStateError },
);
