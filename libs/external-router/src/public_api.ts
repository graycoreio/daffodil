/*
 * Public API Surface of @daffodil/external-router
 */

export { DaffExternalRouterModule } from './external-router.module';

export {
	DAFF_EXTERNAL_ROUTER_CONFIG,
	DaffExternalRouterConfiguration,
} from './config';

export { provideRouteResolvableByType } from './token/type-resolvable-routes.token';

export { DaffResolvableRoute } from './model/resolvable-route';
export { RouteWithoutPath } from './model/route-without-path';

export { DaffExternalRouter } from './router/router.service';

export { DaffExternalRouterNoWildcardError } from './errors/no-wildcard';
export { DaffExternalRouterUnknownRouteTypeError } from './errors/unknown-type';
