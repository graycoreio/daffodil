import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, combineLatest } from 'rxjs';
import { DaffioHeaderActionTypes, SetHeaderColor, HeaderStick, HeaderUnstick } from '../actions/header.actions';
import { map } from 'rxjs/operators';
import { RouterNavigatedAction, ROUTER_NAVIGATED } from '@ngrx/router-store';
import { computeDeepestRouteDataKey } from '../../helpers/computeDeepestRouteDataKey';
import { DaffPalette } from '@daffodil/design';


@Injectable()
export class DaffioHeaderColorEffects {
  constructor(private actions$: Actions) { }

  @Effect()
  applyHeaderColorOnConfiguredRoutes$ = (): Observable<Action> => combineLatest([
    this.actions$.pipe<HeaderStick | HeaderUnstick>(
      ofType(DaffioHeaderActionTypes.HeaderStickAction, DaffioHeaderActionTypes.HeaderUnstickAction)
    ),
    this.actions$.pipe<RouterNavigatedAction>(ofType(ROUTER_NAVIGATED)),
  ]).pipe(
    map(([stickAction, routerAction]) => {
      const color = computeDeepestRouteDataKey<DaffPalette>(routerAction.payload.routerState.root, 'headerColor');
      if(stickAction.type == DaffioHeaderActionTypes.HeaderUnstickAction && color) {
        return new SetHeaderColor(color);
      }
      else {
        return new SetHeaderColor(undefined);
      }
    })
  );
}
