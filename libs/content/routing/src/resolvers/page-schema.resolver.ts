import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

import { DaffContentSchemaPage } from '@daffodil/content';
import { DaffContentPageSchemaDriver } from '@daffodil/content/driver';
import { DaffRoutingUriNormalizer } from '@daffodil/core/routing';

/**
 * Resolves a {@link DaffContentSchemaPage} for the current route.
 *
 * Uses the {@link DaffContentPageSchemaDriver} to fetch the page schema
 * based on the normalized URL from the router state.
 */
export const daffContentPageSchemaResolver: ResolveFn<DaffContentSchemaPage> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
  inject(DaffContentPageSchemaDriver).get(inject(DaffRoutingUriNormalizer).normalize(state.url));
