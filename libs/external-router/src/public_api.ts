/*
 * Public API Surface of @daffodil/external-router
 */

export { DaffExternalRouterModule } from './external-router.module';

export {
  DAFF_EXTERNAL_ROUTER_CONFIG,
  DaffExternalRouterConfiguration,
} from './config';

export { daffProvideRouteResolvableByType } from './token/type-resolvable-routes.token';

export { DaffExternalRouteType } from './model/route-type';
export { DaffExternallyResolvableUrl } from './model/resolvable-route';
export { DaffRouteWithoutPath } from './model/route-without-path';
export { DaffExternalRouterInsertionStrategy } from './model/insertion-strategy.type';

export { DaffExternalRouter } from './router/router.service';
export { daffExternalRouterInsertRouteBeforeWildCard } from './router/helper/insert-route-before-wildcard';

export { DaffExternalRouterNoWildcardError } from './errors/no-wildcard';
export { DaffExternalRouterUnknownRouteTypeError } from './errors/unknown-type';
