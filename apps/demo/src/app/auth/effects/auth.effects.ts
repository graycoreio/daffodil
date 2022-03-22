import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Actions,
  createEffect,
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

import { DaffAuthActionTypes } from '@daffodil/auth/state';

@Injectable()
export class DemoAuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}


  authSuccess$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(
      DaffAuthActionTypes.AuthLoginSuccessAction,
    ),
    tap(() => this.router.navigateByUrl('/')),
    switchMapTo(EMPTY),
  ), {
    dispatch: false,
  });
}
