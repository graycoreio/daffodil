import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  Router,
  Route,
} from '@angular/router';


import { DaffExternalRouterNoWildcardError } from '../errors/no-wildcard';
import { DaffExternallyResolvableUrl } from '../model/resolvable-route';
import { TypeRoutePair } from '../model/type-route-pair';
import { DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE } from '../token/type-resolvable-routes.token';
import { daffTransformResolvedRouteToRoute } from '../transform/resolved-route-to-route';
import { insertRouteBeforeWildCard } from './helper/insert-route-before-wildcard';

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
  add(resolvedRoute: DaffExternallyResolvableUrl): void {
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
