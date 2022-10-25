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
  switchMap,
} from 'rxjs/operators';

import { DaffAuthLoginActionTypes } from '@daffodil/auth/state';

@Injectable()
export class DemoAuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}


  authSuccess$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(
      DaffAuthLoginActionTypes.LoginSuccessAction,
    ),
    tap(() => this.router.navigateByUrl('/')),
    switchMap(() => EMPTY),
  ), {
    dispatch: false,
  });
}
