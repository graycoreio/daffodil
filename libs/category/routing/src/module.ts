import {
  inject,
  NgModule,
} from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import {
  DaffProductGetCollectionRequestFromRoute,
  DaffProductRoutingModule,
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

@NgModule({
  imports: [
    DaffProductRoutingModule,
    EffectsModule.forFeature([
      DaffCategoryRoutingCollectionEffects,
    ]),
  ],
  providers: [
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
  ],
})
export class DaffCategoryRoutingModule {}
