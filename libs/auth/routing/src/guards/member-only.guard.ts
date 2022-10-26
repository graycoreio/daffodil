import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import {
  Actions,
  ofType,
} from '@ngrx/effects';
import { Observable } from 'rxjs';
import {
  map,
  tap,
} from 'rxjs/operators';

import {
  DaffAuthFacade,
  DaffAuthGuardCheck,
  DaffAuthActionTypes,
  DaffAuthGuardCheckCompletion,
} from '@daffodil/auth/state';

import { DaffAuthMemberOnlyGuardRedirectUrl } from './member-only-guard-redirect.token';

@Injectable({
  providedIn: 'any',
})
export class MemberOnlyGuard implements CanActivate {
  constructor(
    private facade: DaffAuthFacade,
    private actions$: Actions,
    private router: Router,
    @Inject(DaffAuthMemberOnlyGuardRedirectUrl) private redirectUrl: string,
  ) {}

  canActivate(): Observable<boolean> {
    const ret = this.isAuthenticated().pipe(
      tap(result => {
        if (!result) {
          this.router.navigateByUrl(this.redirectUrl);
        }
      }),
    );

    this.facade.dispatch(new DaffAuthGuardCheck());

    return ret;
  }

  private isAuthenticated(): Observable<boolean> {
    return this.actions$.pipe(
      ofType(DaffAuthActionTypes.AuthGuardCheckCompletionAction),
      map((action: DaffAuthGuardCheckCompletion) => action.result),
    );
  }
}
