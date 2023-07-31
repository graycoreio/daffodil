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
  iif,
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

const canActivate = (resolved: DaffCartResolveState): boolean => {
  switch (resolved) {
    // proceed with navigation
    case DaffCartResolveState.Succeeded:
      return true;
    // we should wait for resolution to finish
    case DaffCartResolveState.Resolving:
      return null;
    // navigation cannot proceed, redirect
    case DaffCartResolveState.Default:
    case DaffCartResolveState.Failed:
    case DaffCartResolveState.ServerSide:
    default:
      return false;
  }
};

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
      // first step: decide if we should resolve a cart
      map((resolved) => shouldAttemptResolution(resolved, !!this.storage.getCartId())),
      tap((shouldAttempt) => {
        if(shouldAttempt) {
          this.facade.dispatch(new DaffResolveCart());
        }
      }),
      // If we dispatch above, we can't immediately proceed with the next step
      // as the resolved state is not guaranteed to be updated in time.
      // This ensures that the above dispatched DaffResolveCart is processed
      // by the reducers before this guard proceeds to the next step
      switchMap((shouldAttempt) => iif(
        () => shouldAttempt,
        this.facade.resolved$.pipe(
          skipUntil(this.facade.resolved$.pipe(
            filter((innerResolved) => innerResolved === DaffCartResolveState.Resolving),
          )),
        ),
        this.facade.resolved$,
      )),
      // second step: decide if navigation should proceed
      map((resolved) => canActivate(resolved)),
      // ensure that the pipe does not emit before resolution has been completed
      filter((response) => response !== null && response !== undefined),
      // finally we can resolve, but to where do we resolve
      map((resolved) => resolved ? resolved : this.router.parseUrl(this.redirectUrl)),
    );
  }
}
