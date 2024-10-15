import { createSingleInjectionToken } from '@daffodil/core';

import { DaffSearchRoutingOptionBuilder } from './builders.token';

export const {
  /**
   * An internal token to combine the {@link DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS} into a single builder.
   */
  token: DAFF_SEARCH_ROUTING_OPTIONS_BUILDER,
  provider: provideDaffSearchRoutingOptionsBuilder,
} = createSingleInjectionToken<DaffSearchRoutingOptionBuilder>('DAFF_SEARCH_ROUTING_OPTIONS_BUILDER');
