import { CanActivate, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { tap, filter, take, map } from 'rxjs/operators';

import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffResolvedCartGuardRedirectUrl } from './resolved-cart-guard-redirect.token';
import { DaffResolveCart } from '../../actions/public_api';
import { DaffCartResolveState } from '../../reducers/public_api';

/**
 * A routing guard that will optionally redirect to a given url if the cart is not properly resolved.
 * It will initiate cart resolution.
 * The url has no default and the guard will not redirect if no value is specified.
 * Specify a redirect path with the {@link DaffResolvedCartGuardRedirectUrl} injection token.
 * The guard will wait until the cart has been resolved before performing the check and emitting.
 */
@Injectable({
	providedIn: 'root'
})
export class DaffResolvedCartGuard implements CanActivate {
  constructor(
		private facade: DaffCartFacade,
		private router: Router,
		@Inject(DaffResolvedCartGuardRedirectUrl) private redirectUrl: string
	) {}

  canActivate(): Observable<boolean> {
    this.facade.dispatch(new DaffResolveCart());

    return this.facade.resolved$.pipe(
      filter(resolvedState => resolvedState === DaffCartResolveState.Succeeded || resolvedState === DaffCartResolveState.Failed),
      map(resolvedState => resolvedState === DaffCartResolveState.Succeeded),
      take(1),
			tap(success => {
				if (!success && this.redirectUrl) {
					this.router.navigateByUrl(this.redirectUrl)
				}
			})
		)
  }
}
