import { Inject, Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';

import { insertRouteBeforeWildCard } from './helper/insert-route-before-wildcard';

import { TypeRoutePair } from '../model/type-route-pair';
import { daffTransformResolvedRouteToRoute } from '../transform/resolved-route-to-route';
import { DaffResolvableRoute } from '../model/resolvable-route';
import { DaffExternalRouterNoWildcardError } from '../errors/no-wildcard';
import { DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE } from '../token/type-resolvable-routes.token';

@Injectable({
	providedIn: 'root',
})
export class DaffExternalRouter {
	constructor(
		private router: Router,
		@Inject(DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE)
		private runtimeRoutes: TypeRoutePair[],
	) {}

	/**
	 * Adds a route to the existing router configuration.
	 */
	add(resolvedRoute: DaffResolvableRoute): void {
		try {
			const route = daffTransformResolvedRouteToRoute(
				resolvedRoute,
				this.runtimeRoutes,
			);
			this.router.resetConfig(
				insertRouteBeforeWildCard(route, this.router.config),
			);
		} catch (e) {
			if (e instanceof DaffExternalRouterNoWildcardError) {
				throw new DaffExternalRouterNoWildcardError(
					`${e.message} This usually means you have misconfigured your routes.`,
				);
			}

			throw e;
		}
	}
}
