import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';

import {
  DaffProductGetCollectionRequestFromRoute,
  provideDaffProductRouting,
} from '@daffodil/product/routing';
import {
  DaffSearchRoutingOptionBuilder,
  DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS,
  provideDaffSearchRouting,
} from '@daffodil/search/routing';
import { DaffSearchProductDriverOptions } from '@daffodil/search-product/driver';

import { DaffSearchProductRoutingCollectionEffects } from './effects/collection-route.effects';

/**
 * Provides the `@daffodil/search-product/routing` effects and search routing options builder.
 * Includes {@link provideDaffProductRouting} and {@link provideDaffSearchRouting}.
 */
export const provideDaffSearchProductRouting = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffProductRouting(),
  provideDaffSearchRouting(),
  provideEffects(DaffSearchProductRoutingCollectionEffects),
  {
    provide: DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS,
    useFactory: () => {
      const service = inject(DaffProductGetCollectionRequestFromRoute);
      const builder: DaffSearchRoutingOptionBuilder<DaffSearchProductDriverOptions> = route => service.getRequest(route.queryParamMap);
      return builder;
    },
    multi: true,
  },
]);
