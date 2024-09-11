import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  startWith,
} from 'rxjs';

import {
  DaffBreakpoints,
  SERVER_SAFE_BREAKPOINT_OBSERVER,
} from '@daffodil/design';
import {
  DaffSidebarModeEnum,
  DaffSidebarService,
} from '@daffodil/design/sidebar';
import { DaffRouterDataService } from '@daffodil/router';

import { DAFFIO_NAV_SIDEBAR_ID } from '../../nav/header/sidebar-id';
import { DaffioRoute } from '../../router/route.type';

/**
 * A sidebar service that handles the mode logic and pulling the active registration from {@link DaffioRouteWithSidebars#data#daffioSidebars}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffioSidebarService extends DaffSidebarService {
  /**
   * The sidebar mode.
   * In big tablet, it will use the sidebar mode from {@link DaffioRouteWithSidebars#data#sidebarMode}, if defined, side-fixed otherwise.
   * In a viewport smaller than big tablet it will be under.
   */
  readonly mode$ = combineLatest([
    this.routerData.data$,
    this.breakpointObserver.observe(DaffBreakpoints.BIG_TABLET).pipe(
      startWith({ matches: true }),
      map((result) => result?.matches),
    ),
  ]).pipe(
    distinctUntilChanged(),
    map(([data, isBigTablet]) =>
      isBigTablet
        ? data.sidebarMode || DaffSidebarModeEnum.SideFixed
        : DaffSidebarModeEnum.Under,
    ),
    distinctUntilChanged(),
  );

  /**
   * The sidebar registration currently activated by `open` or {@link DAFFIO_NAV_LINKS_SIDEBAR_ID}.
   */
  readonly activeRegistration$ = combineLatest([
    this.id$.pipe(
      filter((id) => !!id),
    ),
    this.routerData.data$.pipe(
      map((data) => data.daffioSidebars),
    ),
  ]).pipe(
    distinctUntilChanged(),
    map(([id, sidebars]) => sidebars[id]),
  );

  constructor(
    @Inject(SERVER_SAFE_BREAKPOINT_OBSERVER) private breakpointObserver: BreakpointObserver,
    private routerData: DaffRouterDataService<DaffioRoute['data']>,
  ) {
    super(DAFFIO_NAV_SIDEBAR_ID);
  }
}
