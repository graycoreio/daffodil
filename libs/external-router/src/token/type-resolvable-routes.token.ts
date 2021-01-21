import { InjectionToken } from '@angular/core';
import { TypeRoutePair } from '../model/type-route-pair';
import { RouteWithoutPath } from '../model/route-without-path';

import { Provider } from '@angular/core';

/**
 * A multi-token that allows you to register route "types" that correspond to routes.
 */
export const DAFF_EXTERNAL_ROUTER_TYPE_RESOLVABLE_ROUTES = new InjectionToken<
	TypeRoutePair[]
>('DAFF_EXTERNAL_ROUTER_RESOLVABLE_TYPE_ROUTES', {
	providedIn: 'root',
	factory: () => [],
});

/**
 * A provider used to connect a type to a route to enable dynamic route resolution at runtime.
 */
export const provideRouteResolvableByType = (
	type: string,
	route: RouteWithoutPath,
): Provider => {
	return {
		provide: DAFF_EXTERNAL_ROUTER_TYPE_RESOLVABLE_ROUTES,
		multi: true,
		useValue: { type: type, route: route },
	};
};
