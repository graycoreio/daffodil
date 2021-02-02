import {
  Route,
  Routes,
} from '@angular/router';

import { DaffExternalRouterNoWildcardError } from '../../errors/no-wildcard';

/**
 * Inserts a Route into Routes right before the wildcard route.
 * If no wildcard is found, it fails fast with a `DaffExternalRouterNoWildcardError`.
 */
export const insertRouteBeforeWildCard = (
  route: Route,
  routes: Routes,
): Routes => {
  const index = routes.findIndex((r: Route) => r.path === '**');
  if (index === -1) {
    throw new DaffExternalRouterNoWildcardError(
      'No wildcard (**) route was found during route resolution.',
    );
  }
  return [
    ...routes.slice(0, index),
    route,
    ...routes.slice(index),
  ];
};
