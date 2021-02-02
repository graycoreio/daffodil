import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import {
  ROUTER_NAVIGATION,
  ROUTER_NAVIGATED,
  RouterNavigatedAction,
} from '@ngrx/router-store';
import { Action } from '@ngrx/store';
import {
  Observable,
  of,
  asyncScheduler,
  combineLatest,
} from 'rxjs';
import {
  switchMap,
  delay,
  tap,
  map,
} from 'rxjs/operators';

import { DaffBreakpoints } from '@daffodil/design';

import * as SidebarActions from '../actions/sidebar.actions';
import { computeDeepestSidebarMode } from '../helpers/computeDeepestSidebarMode';


@Injectable()
export class DaffioSidebarEffects {
  constructor(
    private actions$: Actions,
    private breakpointsObserver: BreakpointObserver,
  ) { }

  @Effect()
  closeOnPageChange$ =
    (delayTime = 10, scheduler = asyncScheduler): Observable<Action> => this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      delay(delayTime, scheduler),
      switchMap(() => of(new SidebarActions.CloseSidebar())),
    );
}
