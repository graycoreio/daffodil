import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import * as SidebarActions from '../actions/sidebar.actions';
import { DaffBreakpoints, DaffSidebarMode } from '@daffodil/design';

import { computeDeepestRouteDataKey } from '../../helpers/computeDeepestRouteDataKey';


@Injectable()
export class DaffioSidebarRoutingModeEffects {
  constructor(
    private actions$: Actions,
    private breakpointsObserver: BreakpointObserver
  ) { }

  @Effect()
  changeModeWhenVisitingConfiguredRoute$ = (): Observable<Action> => combineLatest(
    this.actions$.pipe<RouterNavigatedAction>(ofType(ROUTER_NAVIGATED)),
    this.breakpointsObserver.observe(DaffBreakpoints.TABLET)
  ).pipe(
    map(([action, state]) => {
      const mode = computeDeepestRouteDataKey<DaffSidebarMode>(action.payload.routerState.root, 'sidebarMode');
      if(state.matches && mode){
        return new SidebarActions.SetSidebarMode(mode);
      }
      else {
        return new SidebarActions.ResetMode()
      }
    }) 
  )
}
