import { DaffExternalRouterInsertionStrategy } from '../model/insertion-strategy.type';
import { DaffExternallyResolvableUrl } from '../model/resolvable-route';
import { DaffTypeRoutePair } from '../model/type-route-pair';

/**
 * Finds the inserter associated with the resolved route, if such an inserter exists.
 */
export const daffTransformResolvedRouteToInsertionStrategy = (
  resolvedRoute: DaffExternallyResolvableUrl,
  routeTypes: DaffTypeRoutePair[],
): DaffExternalRouterInsertionStrategy => {
  const routeType = routeTypes
    .filter(t => t.type === resolvedRoute.type)
    .shift();

  return routeType?.insertionStrategy;
};
