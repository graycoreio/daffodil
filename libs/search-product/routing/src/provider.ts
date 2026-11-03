import {
  EnvironmentProviders,
  importProvidersFrom,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';

import {
  DaffProductGetCollectionRequestFromRoute,
  DaffProductRoutingModule,
} from '@daffodil/product/routing';
import {
  DaffSearchRoutingModule,
  DaffSearchRoutingOptionBuilder,
  DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS,
} from '@daffodil/search/routing';
import { DaffSearchProductDriverOptions } from '@daffodil/search-product/driver';

import { DaffSearchProductRoutingCollectionEffects } from './effects/collection-route.effects';

/**
 * Provides the `@daffodil/search-product/routing` effects and route option builder.
 */
export const provideDaffSearchProductRouting = (): EnvironmentProviders => makeEnvironmentProviders([
  importProvidersFrom(
    DaffProductRoutingModule,
    DaffSearchRoutingModule,
  ),
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
