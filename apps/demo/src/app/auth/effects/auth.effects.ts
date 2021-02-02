import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import {
  Observable,
  EMPTY,
} from 'rxjs';
import {
  tap,
  switchMapTo,
} from 'rxjs/operators';

import { DaffAuthActionTypes } from '@daffodil/auth';

@Injectable()
export class DemoAuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}

  @Effect({
    dispatch: false,
  })
  authSuccess$: Observable<any> = this.actions$.pipe(
    ofType(
      DaffAuthActionTypes.AuthLoginSuccessAction,
    ),
    tap(() => this.router.navigateByUrl('/')),
    switchMapTo(EMPTY),
  );
}
