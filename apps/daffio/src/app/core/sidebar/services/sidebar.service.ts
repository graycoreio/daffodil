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

// TODO: add test
@Injectable({
  providedIn: 'root',
})
export class DaffioSidebarService extends DaffSidebarService {
  readonly mode$ = combineLatest([
    this.routerData.data$,
    this.breakpointObserver.observe(DaffBreakpoints.BIG_TABLET).pipe(
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
