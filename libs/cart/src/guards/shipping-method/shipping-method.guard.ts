import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { tap, filter, switchMapTo, take } from 'rxjs/operators';

import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartShippingMethodGuardRedirectUrl } from './shipping-method-guard-redirect.token';

/**
 * A routing guard that will redirect to a given url if the shipping method on the cart is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartShippingMethodGuardRedirectUrl injection token.
 * The guard will wait until the cart has been resolved before performing the check.
 */
@Injectable({
	providedIn: 'root'
})
export class DaffShippingMethodGuard implements CanActivate {
  constructor(
		private facade: DaffCartFacade,
		private router: Router,
		@Inject(DaffCartShippingMethodGuardRedirectUrl) private redirectUrl: string
	) {}

  canActivate(): Observable<boolean> {
    return this.facade.id$.pipe(
      filter(cartId => !!cartId),
      switchMapTo(this.facade.hasShippingMethod$),
      take(1),
			tap(hasShippingMethod => {
				if(!hasShippingMethod) {
					this.router.navigateByUrl(this.redirectUrl)
				}
			})
		)
  }
}
