import { Route } from '@angular/router';
import { DaffResolvableRoute } from '../model/resolvable-route';
import { TypeRoutePair } from '../model/type-route-pair';
import { DaffExternalRouterUnknownRouteType } from '../errors/unknown-type';
/**
 * Transforms a DaffResolvableRoute into an Angular Route.
 */
export const daffTransformResolvedRouteToRoute = (
	resolvedRoute: DaffResolvableRoute,
	availableTypes: TypeRoutePair[],
): Route => {
	const routeType = availableTypes
		.filter(t => t.type === resolvedRoute.type)
		.shift();
	if (!routeType) {
		throw new DaffExternalRouterUnknownRouteType(
			`Unable to resolve the route '${resolvedRoute.url}'. Its type is '${resolvedRoute.type}' but a matching route wasn't found.`,
		);
	}

	return {
		path: resolvedRoute.url,
		...routeType.route,
	};
};
