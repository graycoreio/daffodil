import {
  inject,
  NgModule,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import {
  combineLatest,
  map,
  Observable,
} from 'rxjs';

import { DaffCollectionRequest } from '@daffodil/core';
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
  DaffCategoryPageResolver,
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
    DaffCategoryPageResolver,
    DaffCategoryPageIdResolver,
    DaffCategoryPageUrlResolver,
    DaffCategoryRoutingUrlRequestBuilder,
    {
      provide: DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS,
      useFactory: () => {
        const service = inject(DaffProductGetCollectionRequestFromRoute);
        const builder: DaffCategoryRoutingRequestBuilder = (route, state) => service.getRequest(route, state);
        return builder;
      },
      multi: true,
    },
    {
      provide: DAFF_CATEGORY_ROUTING_OPTIONS_BUILDER,
      useFactory: () => {
        const builders = inject(DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS);
        return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DaffCollectionRequest> =>
          combineLatest(builders.map(builder => builder(route, state))).pipe(
            map((requests) => Object.assign({}, ...requests)),
          );
      },
    },
  ],
})
export class DaffCategoryRoutingModule {}
