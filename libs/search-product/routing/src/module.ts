import {
  inject,
  NgModule,
} from '@angular/core';

import { DaffProductGetCollectionRequestFromRoute } from '@daffodil/product/routing';
import { DaffSearchProductDriverOptions } from '@daffodil/search-product/driver';
import {
  DaffSearchRoutingOptionBuilder,
  DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS,
} from '@daffodil/search/routing';

@NgModule({
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
