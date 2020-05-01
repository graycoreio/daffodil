import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';

import {
  DaffAuthActionTypes,
  DaffAuthGuardCheckCompletion,
  DaffAuthGuardCheck
} from '../actions/auth.actions';
import { DaffAuthFacade } from '../facades/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class MemberOnlyGuard implements CanActivate {
  constructor(
    private facade: DaffAuthFacade,
    private actions$: Actions,
  ) {}

  canActivate(): Observable<boolean> {
    const ret = this.isAuthenticated();

    this.facade.dispatch(new DaffAuthGuardCheck());

    return ret
  }

  isAuthenticated(): Observable<boolean> {
    return this.actions$.pipe(
      ofType(DaffAuthActionTypes.AuthGuardCheckCompletionAction),
      map((action: DaffAuthGuardCheckCompletion) => action.result)
    )
  }
}
