import { Route, Routes } from '@angular/router';
import { DaffExternalRouterNoWildcard } from '../../errors/no-wildcard';

/**
 * Inserts a route into a Routes array right before the wildcard route.
 * If no wildcard is found, it fails fast with a `DaffExternalRouterNoWildcard`.
 */
export const insertRouteBeforeWildCard = (
	route: Route,
	config: Routes,
): Routes => {
	const index = config.findIndex((r: Route) => r.path === '**');
	if (index === -1) {
		throw new DaffExternalRouterNoWildcard(
			'No wildcard (**) route was found during route resolution.',
		);
	}

	config.splice(index, 0, route);
	return [...config];
};
