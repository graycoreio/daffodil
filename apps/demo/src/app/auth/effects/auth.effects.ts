import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, switchMapTo } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { Router } from '@angular/router';

import {
  DaffAuthActionTypes,
} from '@daffodil/auth';

@Injectable()
export class DemoAuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router
  ) {}

  @Effect({
    dispatch: false
  })
  authSuccess$: Observable<any> = this.actions$.pipe(
    ofType(
      DaffAuthActionTypes.AuthLoginSuccessAction,
    ),
    tap(() => this.router.navigateByUrl('/')),
    switchMapTo(EMPTY)
  )
}
