import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {
  Actions,
  ofType,
} from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffAuthFacade,
  DaffAuthGuardCheck,
  DaffAuthActionTypes,
  DaffAuthGuardCheckCompletion,
} from '@daffodil/auth/state';

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

    return ret;
  }

  isAuthenticated(): Observable<boolean> {
    return this.actions$.pipe(
      ofType(DaffAuthActionTypes.AuthGuardCheckCompletionAction),
      map((action: DaffAuthGuardCheckCompletion) => action.result),
    );
  }
}
