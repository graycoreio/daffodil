import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { combineLatest } from 'rxjs';
import {
  map,
  tap,
} from 'rxjs/operators';

import {
  daffSidebarIsFloatingMode,
  daffSidebarIsDockedMode,
} from '@daffodil/design/sidebar';
import { DaffRouterDataService } from '@daffodil/router';

import { DaffioRoute } from '../../router/route.type';
import { DaffioSidebarService } from '../services/sidebar.service';

@Injectable()
export class DaffioSidebarRoutingModeEffects {
  constructor(
    private actions$: Actions,
    private sidebarService: DaffioSidebarService,
    private routerData: DaffRouterDataService<DaffioRoute['data']>,
  ) { }

  openOrCloseSidebar$ = createEffect(() =>
    combineLatest([
      this.sidebarService.mode$,
      this.routerData.data$.pipe(
        map((data) => data.daffioDockedSidebar),
      ),
      this.actions$.pipe(
        ofType(ROUTER_NAVIGATED),
      ),
    ]).pipe(
      tap(([mode, dockedSidebar]) => {
        if (daffSidebarIsFloatingMode(mode) || !dockedSidebar) {
          this.sidebarService.close();
        } else if (daffSidebarIsDockedMode(mode) && dockedSidebar) {
          this.sidebarService.open(dockedSidebar);
        }
      }),
    ), { dispatch: false });
}
