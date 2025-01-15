import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
} from '@angular/router';
import {
  Observable,
  filter,
  map,
  merge,
} from 'rxjs';

import {
  DAFF_ROUTER_DATA_SERVICE_CONFIG,
  DaffRouterDataServiceConfig,
} from '../config/public_api';
import { daffRouterDataCollect } from '../helpers/collect-data';

@Injectable({
  providedIn: 'root',
})
export class DaffRouterDataService<T extends ActivatedRouteSnapshot['data'] = ActivatedRouteSnapshot['data']> {
  /**
   * A collection of all the route data defined in any part of the currently activated route's tree.
   * Child route's data takes precendence over parent data.
   */
  public data$: Observable<T>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(DAFF_ROUTER_DATA_SERVICE_CONFIG) private config: DaffRouterDataServiceConfig,
  ) {
    /**
     * Because data won't reemit for route changes and
     * the top-level data probably won't have named views
     * anyway, use `url` and router events to listen for route changes
     * and pull named views from nested data in the snapshot.
     *
     * On first page load, this directive will likely not be instantiated
     * in time to catch router events so route.url emits for this case.
     * On subsequent route changes, `route.url` will not change (why????)
     * so we use router events instead.
     */
    this.data$ = merge(
      this.router.events.pipe(
        filter((e) => e instanceof NavigationEnd),
      ),
      this.route.url,
    ).pipe(
      map(() => this.route.snapshot),
      map((r) => daffRouterDataCollect<T>(r, this.config.mergeStrategy)),
    );
  }
}
