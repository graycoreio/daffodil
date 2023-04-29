import {
  inject,
  NgModule,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import {
  combineLatest,
  map,
} from 'rxjs';

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
        return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
          combineLatest(builders.map(builder => builder(route, state))).pipe(
            map((requests) => Object.assign({}, ...requests)),
          );
      },
    },
    DaffSearchPageResolver,
  ],
})
export class DaffSearchRoutingModule {}
