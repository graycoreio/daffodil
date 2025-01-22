import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterState,
} from '@angular/router';
import {
  filter,
  map,
  Observable,
  shareReplay,
} from 'rxjs';

const getActivatedRoute = (routerState: RouterState): ActivatedRoute => {
  let route = routerState.root;
  while (route.firstChild) {
    route = route.firstChild;
  }
  return route;
};

/**
 * Allows accessing the currently activated route from anywhere in the DI hierarchy.
 * Contrasted to simply injecting `ActivatedRoute`, this will be accurate even from outside the router outlet.
 *
 * Note that this service operates by listening to router events. It is therefore recommended to
 * inject this service in the root and subscribe to `route$` on app init so that all routing events are captured.
 * The consumer can then subscribe at any later time (after all navigations) and the last emitted value will be replayed.
 * {@link provideDaffRouterActivatedRoute} is the recommended way to do this.
 *
 * @deprecated do `inject(ChildrenOutletContexts).getContext(PRIMARY_OUTLET).route` instead.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffRouterActivatedRoute {
  route$: Observable<ActivatedRoute> = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => getActivatedRoute(this.router.routerState)),
    shareReplay(1),
  );

  constructor(
    private router: Router,
  ) {}
}
