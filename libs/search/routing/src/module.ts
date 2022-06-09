import {
  inject,
  NgModule,
} from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import {
  DAFF_SEARCH_ROUTING_OPTIONS_BUILDER,
  DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS,
} from './injection-tokens/public_api';
import { DaffSearchPageResolver } from './resolvers/public_api';

@NgModule({
  providers: [
    {
      provide: DAFF_SEARCH_ROUTING_OPTIONS_BUILDER,
      useFactory: () => {
        const builders = inject(DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS);
        return (route: ActivatedRouteSnapshot) =>
          Object.assign({}, ...builders.map(builder => builder(route)));
      },
    },
    DaffSearchPageResolver,
  ],
})
export class DaffSearchRoutingModule {}
