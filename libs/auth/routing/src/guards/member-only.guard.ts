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
  DaffAuthDriverErrorCodes,
  DaffAuthDriverTokenCheck,
} from '@daffodil/auth/driver';
import { DaffAuthGuardLogout } from '@daffodil/auth/state';
import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import { DaffAuthMemberOnlyGuardRedirectUrl } from './member-only-guard-redirect.token';


@Injectable({
  providedIn: 'any',
})
export class MemberOnlyGuard implements CanActivate {
  constructor(
    private tokenCheck: DaffAuthDriverTokenCheck,
    private storage: DaffAuthStorageService,
    private router: Router,
    private store: Store,
    @Inject(DAFF_AUTH_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffAuthMemberOnlyGuardRedirectUrl) private redirectUrl: string,
  ) {}

  canActivate(): Observable<boolean> {
    return this.isAuthenticated().pipe(
      tap(result => {
        if (!result) {
          this.router.navigateByUrl(this.redirectUrl);
        }
      }),
    );
  }

  private isAuthenticated(): Observable<boolean> {
    return this.tokenCheck.check().pipe(
      map(() => true),
      catchError((error: DaffError) => {
        if (error.code === DaffAuthDriverErrorCodes.UNAUTHORIZED || error.code === DaffAuthDriverErrorCodes.AUTHENTICATION_FAILED) {
          this.storage.removeAuthToken();
          this.store.dispatch(new DaffAuthGuardLogout(this.errorMatcher(error)));
        }
        return of(false);
      }),
    );
  }
}
