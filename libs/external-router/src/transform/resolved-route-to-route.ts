import { DaffExternalRouterUnknownRouteTypeError } from '../errors/unknown-type';
import { DaffExternallyResolvableUrl } from '../model/resolvable-route';
import { DaffRouteInfo } from '../model/route-info';
import { DaffTypeRoutePair } from '../model/type-route-pair';

/**
 * Transforms a DaffExternallyResolvableUrl into an Angular Route.
 */
export const daffTransformResolvedRouteToRoute = (
  resolvedRoute: DaffExternallyResolvableUrl,
  availableTypes: DaffTypeRoutePair[],
): DaffRouteInfo => {
  const routeType = availableTypes
    .filter(t => t.type === resolvedRoute.type)
    .shift();
  if (!routeType) {
    throw new DaffExternalRouterUnknownRouteTypeError(
      `Unable to resolve the route '${resolvedRoute.url}'. Its type is '${resolvedRoute.type}' but a matching route wasn't found.`,
    );
  }

  return {
    route: {
      path: resolvedRoute.url,
      daffExternalRouteType: resolvedRoute.type,
      ...routeType.route,
      data: {
        ...resolvedRoute.data,
      },
    },
    insertionStrategy: routeType.insertionStrategy,
  };
};
