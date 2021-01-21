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
export { DaffExternalRouter } from './router/router.service';

export { DaffExternalRouterNoWildcard } from './errors/no-wildcard';
