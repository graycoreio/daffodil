import {
  InjectionToken,
  inject,
} from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import {
  DaffSearchRoutingOptionBuilder,
  DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS,
} from './builders.token';

/**
 * An internal token to combine the {@link DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS} into a single builder.
 */
export const DAFF_SEARCH_ROUTING_OPTIONS_BUILDER = new InjectionToken<DaffSearchRoutingOptionBuilder>(
  'DAFF_SEARCH_ROUTING_OPTIONS_BUILDER',
  {
    factory: () => {
      const builders = inject(DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS);
      return (route: ActivatedRouteSnapshot) =>
        Object.assign({}, ...builders.map(builder => builder(route)));
    },
  },
);
