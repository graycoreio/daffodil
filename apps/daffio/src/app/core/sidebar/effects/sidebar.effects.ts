import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of, asyncScheduler } from 'rxjs';
import { switchMap, delay } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import { ROUTER_NAVIGATION } from '@ngrx/router-store';

import * as SidebarActions from '../actions/sidebar.actions';


@Injectable()
export class SidebarEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  closeOnPageChange$ = 
    (delayTime = 10, scheduler = asyncScheduler) : Observable<Action> => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    delay(delayTime, scheduler),
    switchMap(() => {
      return of(new SidebarActions.CloseSidebar());
    })
  );
}
