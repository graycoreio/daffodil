import {
  inject,
  InjectionToken,
} from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import {
  DaffCategoryRoutingRequestBuilder,
  DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS,
} from './builders.token';

/**
 * An internal token to combine the {@link DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS} into a single builder.
 */
export const DAFF_CATEGORY_ROUTING_OPTIONS_BUILDER = new InjectionToken<DaffCategoryRoutingRequestBuilder>(
  'DAFF_CATEGORY_ROUTING_OPTIONS_BUILDER',
  {
    factory: () => () => ({}),
  },
);
