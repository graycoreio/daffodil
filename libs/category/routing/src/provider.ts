import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { provideEffects } from '@ngrx/effects';

import {
  DaffProductGetCollectionRequestFromRoute,
  provideDaffProductRouting,
} from '@daffodil/product/routing';

import { DaffCategoryRoutingCollectionEffects } from './effects/collection-route.effects';
import {
  DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS,
  DaffCategoryRoutingRequestBuilder,
} from './injection-tokens/public_api';
import { DAFF_CATEGORY_ROUTING_OPTIONS_BUILDER } from './injection-tokens/request/builder.token';
import {
  DaffCategoryPageIdResolver,
  DaffCategoryPageUrlResolver,
} from './resolvers/public_api';
import { DaffCategoryRoutingUrlRequestBuilder } from './services/public_api';

/**
 * Provides the `@daffodil/category/routing` effects, resolvers, and services.
 * Includes {@link provideDaffProductRouting}.
 */
export const provideDaffCategoryRouting = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffProductRouting(),
  provideEffects(DaffCategoryRoutingCollectionEffects),
  DaffCategoryPageIdResolver,
  DaffCategoryPageUrlResolver,
  DaffCategoryRoutingUrlRequestBuilder,
  {
    provide: DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS,
    useFactory: () => {
      const service = inject(DaffProductGetCollectionRequestFromRoute);
      const builder: DaffCategoryRoutingRequestBuilder = route => service.getRequest(route.queryParamMap);
      return builder;
    },
    multi: true,
  },
  {
    provide: DAFF_CATEGORY_ROUTING_OPTIONS_BUILDER,
    useFactory: () => {
      const builders = inject(DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS);
      return (route: ActivatedRouteSnapshot) =>
        Object.assign({}, ...builders.map(builder => builder(route)));
    },
  },
]);
