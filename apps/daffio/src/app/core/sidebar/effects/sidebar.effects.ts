import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of, asyncScheduler } from 'rxjs';
import { switchMap, delay, filter, merge } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import { ROUTER_NAVIGATION, ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import * as SidebarActions from '../actions/sidebar.actions';


@Injectable()
export class DaffioSidebarEffects {
  constructor(private actions$: Actions) {}

  // @Effect()
  // closeOnPageChange$ = 
  //   (delayTime = 10, scheduler = asyncScheduler) : Observable<Action> => this.actions$.pipe(
  //   ofType(ROUTER_NAVIGATION),
  //   delay(delayTime, scheduler),
  //   switchMap(() => {
  //     return of(new SidebarActions.CloseSidebar());
  //   })
  // );

  @Effect()
  changeModeWhenVisitingDocs$ = () => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    switchMap((action: RouterNavigatedAction) => {
      if(action.payload.event.urlAfterRedirects.indexOf("docs") >= 0){
        return of(new SidebarActions.SetSidebarMode("side"))
      }
      else {
        return of(new SidebarActions.SetSidebarMode("push"))
      }
    })
  )
}
