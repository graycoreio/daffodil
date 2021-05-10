/*
 * Public API Surface of @daffodil/external-router
 */

export { DaffExternalRouterModule } from './external-router.module';

export {
  DAFF_EXTERNAL_ROUTER_CONFIG,
  DaffExternalRouterConfiguration,
} from './config';

export { daffProvideRouteResolvableByType } from './token/type-resolvable-routes.token';

export * from './model/public_api';

export { DaffExternalRouter } from './router/router.service';
export { daffInsertRouteBeforeWildCardStrategy } from './router/helper/insert-route-before-wildcard';

export { DaffExternalRouterNoWildcardError } from './errors/no-wildcard';
export { DaffExternalRouterUnknownRouteTypeError } from './errors/unknown-type';
