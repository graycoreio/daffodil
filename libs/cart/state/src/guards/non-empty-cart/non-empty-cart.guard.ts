import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { tap, filter, switchMapTo, take, map } from 'rxjs/operators';

import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartNonEmptyCartGuardRedirectUrl } from './non-empty-cart-guard-redirect.token';

/**
 * A routing guard that will redirect to a given url if the billing address on the cart is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartNonEmptyCartGuardRedirectUrl injection token.
 * The guard will wait until the cart has been resolved before performing the check and emitting.
 */
@Injectable({
	providedIn: 'root'
})
export class DaffNonEmptyCartGuard implements CanActivate {
  constructor(
		private facade: DaffCartFacade,
		private router: Router,
		@Inject(DaffCartNonEmptyCartGuardRedirectUrl) private redirectUrl: string
	) {}

  canActivate(): Observable<boolean> {
    return this.facade.resolved$.pipe(
      filter(resolved => resolved),
      switchMapTo(this.facade.isCartEmpty$),
      map(isCartEmpty => !isCartEmpty),
      take(1),
			tap(hasNonEmptyCart => {
				if (!hasNonEmptyCart) {
					this.router.navigateByUrl(this.redirectUrl)
				}
			})
		)
  }
}
