import { Route } from '@angular/router';

import { DaffExternalRouterUnknownRouteTypeError } from '../errors/unknown-type';
import { DaffExternallyResolvableUrl } from '../model/resolvable-route';
import { TypeRoutePair } from '../model/type-route-pair';

/**
 * Transforms a DaffExternallyResolvableUrl into an Angular Route.
 */
export const daffTransformResolvedRouteToRoute = (
  resolvedRoute: DaffExternallyResolvableUrl,
  availableTypes: TypeRoutePair[],
): Route => {
  const routeType = availableTypes
    .filter(t => t.type === resolvedRoute.type)
    .shift();
  if (!routeType) {
    throw new DaffExternalRouterUnknownRouteTypeError(
      `Unable to resolve the route '${resolvedRoute.url}'. Its type is '${resolvedRoute.type}' but a matching route wasn't found.`,
    );
  }

  return {
    path: resolvedRoute.url,
    ...routeType.route,
  };
};
