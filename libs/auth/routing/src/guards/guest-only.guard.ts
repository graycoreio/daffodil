import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import {
  Observable,
  of,
} from 'rxjs';
import {
  catchError,
  map,
  tap,
} from 'rxjs/operators';

import {
  DAFF_AUTH_ERROR_MATCHER,
  DaffAuthStorageService,
} from '@daffodil/auth';
import {
  DAFF_AUTH_UNAUTHENTICATED_ERROR_CODES,
  DaffAuthDriverErrorCodes,
  DaffAuthDriverTokenCheck,
} from '@daffodil/auth/driver';
import { DaffAuthGuardLogout } from '@daffodil/auth/state';
import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import { DaffAuthGuestOnlyGuardRedirectUrl } from './guest-only-guard-redirect.token';

@Injectable({
  providedIn: 'any',
})
export class GuestOnlyGuard implements CanActivate {
  constructor(
    private tokenCheck: DaffAuthDriverTokenCheck,
    private storage: DaffAuthStorageService,
    private router: Router,
    private store: Store,
    @Inject(DAFF_AUTH_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffAuthGuestOnlyGuardRedirectUrl) private redirectUrl: string,
  ) {}

  canActivate(): Observable<boolean> {
    return this.isUnauthenticated().pipe(
      tap(result => {
        if (!result) {
          this.router.navigateByUrl(this.redirectUrl);
        }
      }),
    );
  }

  private isUnauthenticated(): Observable<boolean> {
    return this.tokenCheck.check().pipe(
      map(() => false),
      catchError((error: DaffError) => {
        if (DAFF_AUTH_UNAUTHENTICATED_ERROR_CODES[error.code]) {
          this.store.dispatch(new DaffAuthGuardLogout(this.errorMatcher(error)));
        }
        return of(true);
      }),
    );
  }
}
