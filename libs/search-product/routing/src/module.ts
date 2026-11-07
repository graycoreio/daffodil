import {
  inject,
  NgModule,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

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
 * @deprecated in favor of {@link provideDaffSearchProductRouting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    DaffProductRoutingModule,
    DaffSearchRoutingModule,
    EffectsModule.forFeature([
      DaffSearchProductRoutingCollectionEffects,
    ]),
  ],
  providers: [
    {
      provide: DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS,
      useFactory: () => {
        const service = inject(DaffProductGetCollectionRequestFromRoute);
        const builder: DaffSearchRoutingOptionBuilder<DaffSearchProductDriverOptions> = route => service.getRequest(route.queryParamMap);
        return builder;
      },
      multi: true,
    },
  ],
})
export class DaffSearchProductRoutingModule {}
