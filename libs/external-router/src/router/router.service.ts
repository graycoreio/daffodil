import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  Router,
  Route,
} from '@angular/router';


import { DaffExternalRouterNoWildcardError } from '../errors/no-wildcard';
import { DaffExternalRouterInsertionStrategy } from '../model/insertion-strategy.type';
import { DaffExternallyResolvableUrl } from '../model/resolvable-route';
import { DaffTypeRoutePair } from '../model/type-route-pair';
import { DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE } from '../token/type-resolvable-routes.token';
import { daffTransformResolvedRouteToInsertionStrategy } from '../transform/resolved-route-to-insertion-strategy';
import { daffTransformResolvedRouteToRoute } from '../transform/resolved-route-to-route';
import { daffExternalRouterInsertRouteBeforeWildCard } from './helper/insert-route-before-wildcard';

@Injectable({
  providedIn: 'root',
})
export class DaffExternalRouter {
  constructor(
		private router: Router,
		@Inject(DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE)
		private runtimeRoutes: DaffTypeRoutePair[],
  ) {}

  /**
   * Adds a route to the existing router configuration.
   */
  add(resolvedRoute: DaffExternallyResolvableUrl): void {
    try {
      const route = daffTransformResolvedRouteToRoute(
        resolvedRoute,
        this.runtimeRoutes,
      );
      const insertionStrategy: DaffExternalRouterInsertionStrategy = daffTransformResolvedRouteToInsertionStrategy(
        resolvedRoute,
        this.runtimeRoutes,
      ) || daffExternalRouterInsertRouteBeforeWildCard;

      this.router.resetConfig(
        insertionStrategy(route, this.router.config),
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
