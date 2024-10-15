/*
 * Public API Surface of @daffodil/external-router
 */

export { DaffExternalRouterModule } from './external-router.module';

export {
  DAFF_EXTERNAL_ROUTER_CONFIG,
  DaffExternalRouterConfiguration,
} from './config';

export { provideDaffRouteResolvableByType } from './token/type-resolvable-routes.token';

export * from './model/public_api';

export { DaffExternalRouter } from './router/router.service';
export { daffInsertRouteBeforeWildCardStrategy } from './router/strategies/insert-route-before-wildcard';

export { daffInsertDataPathStrategy } from './router/strategies/insert-data-path';
export { daffDataPathUrlMatcher } from './router/url-matcher/data-path-matcher';

export { DaffExternalRouterNoWildcardError } from './errors/no-wildcard';
export { DaffExternalRouterUnknownRouteTypeError } from './errors/unknown-type';

export { daffExtractDaffPathData } from './util/extract-daff-path-data';
