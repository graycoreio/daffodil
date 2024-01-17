import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
} from '@angular/router';
import {
  Observable,
  filter,
  map,
  merge,
} from 'rxjs';

import { daffRouterNamedViewsCollect } from '../helpers/collect-named-views';
import { DaffRouterNamedViews } from '../models/named-views.type';

@Injectable({
  providedIn: 'root',
})
export class DaffRouterNamedViewService {
  public namedViews$: Observable<DaffRouterNamedViews>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
    this.namedViews$ = merge(
      this.router.events.pipe(
        filter((e) => e instanceof NavigationEnd),
      ),
      this.route.url,
    ).pipe(
      map(() => this.route.snapshot),
      map(daffRouterNamedViewsCollect),
    );
  }
}
