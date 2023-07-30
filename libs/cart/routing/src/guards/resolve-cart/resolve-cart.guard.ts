import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import {
  Observable,
  of,
} from 'rxjs';
import {
  tap,
  map,
  switchMap,
  skipUntil,
  filter,
  take,
} from 'rxjs/operators';

import { DaffCartStorageService } from '@daffodil/cart';
import {
  DaffCartFacade,
  DaffCartResolveState,
  DaffResolveCart,
} from '@daffodil/cart/state';

import { DaffResolveCartGuardRedirectUrl } from './redirect.token';

const shouldAttemptResolution = (resolvedState: DaffCartResolveState, hasIDInStorage: boolean): boolean =>
  (hasIDInStorage && resolvedState === DaffCartResolveState.Default) || resolvedState === DaffCartResolveState.Failed;

/**
 * A routing guard that will optionally redirect to a given url if the cart is not properly resolved.
 * It will initiate cart resolution.
 * The url has no default and the guard will not redirect if no value is specified.
 * Specify a redirect path with the {@link DaffResolvedCartGuardRedirectUrl} injection token.
 * The guard will wait until the cart has been resolved before performing the check and emitting.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffResolveCartGuard implements CanActivate {
  constructor(
    private facade: DaffCartFacade,
    private router: Router,
    @Inject(DaffResolveCartGuardRedirectUrl) private redirectUrl: string,
    private storage: DaffCartStorageService,
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.facade.resolved$.pipe(
      take(1),
      // first step: decide if we should dispatch resolve
      switchMap((resolved) => {
        if (shouldAttemptResolution(resolved, !!this.storage.getCartId())) {
          this.facade.dispatch(new DaffResolveCart());
          // if we dispatch, we can't immediately proceed with the next step
          // or resolved state won't be updated in time
          // this ensures that the above dispatched resolution is registered by state
          // before this guard proceeds to the next step
          return this.facade.resolved$.pipe(
            skipUntil(this.facade.resolved$.pipe(
              filter((innerResolved) => innerResolved === DaffCartResolveState.Resolving),
            )),
          );
        } else {
          return this.facade.resolved$;
        }
      }),
      // second step: decide if navigation should proceed
      // and if so, to where
      map((resolved) => {
        switch (resolved) {
          // proceed with navigation
          case DaffCartResolveState.Succeeded:
            return true;

          // navigation cannot proceed, redirect
          case DaffCartResolveState.Default:
          case DaffCartResolveState.Failed:
          case DaffCartResolveState.ServerSide:
            return this.router.parseUrl(this.redirectUrl);

          // we should wait for resolution to finish
          case DaffCartResolveState.Resolving:
          default:
            return null;
        }
      }),
      // ensure that the pipe does not emit before resolution has been completed
      filter((response) => response !== null && response !== undefined),
    );
  }
}
