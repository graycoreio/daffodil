import { createSingleInjectionToken } from '@daffodil/core';

import { DaffCategoryRoutingRequestBuilder } from './builders.token';


export const {
  /**
   * An internal token to combine the {@link DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS} into a single builder.
   */
  token: DAFF_CATEGORY_ROUTING_OPTIONS_BUILDER,
  provider: provideDaffCategoryRoutingOptionsBuilder,
} = createSingleInjectionToken<DaffCategoryRoutingRequestBuilder>(
  'DAFF_CATEGORY_ROUTING_OPTIONS_BUILDER',
  {
    factory: () => () => ({}),
  },
);
