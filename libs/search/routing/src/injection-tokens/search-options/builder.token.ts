import { InjectionToken } from '@angular/core';

import { DaffSearchRoutingOptionBuilder } from './builders.token';

/**
 * An internal token to combine the {@link DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS} into a single builder.
 */
export const DAFF_SEARCH_ROUTING_OPTIONS_BUILDER = new InjectionToken<DaffSearchRoutingOptionBuilder>(
  'DAFF_SEARCH_ROUTING_OPTIONS_BUILDER',
);
