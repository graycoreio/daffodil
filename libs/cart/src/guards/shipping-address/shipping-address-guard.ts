import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { tap } from 'rxjs/operators';

import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartShippingAddressGuardRedirectUrl } from './shipping-address-guard-redirect.token';

/**
 * A routing guard that will redirect to a given url if the shipping address on the cart is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartShippingAddressGuardRedirectUrl injection token.
 */
@Injectable({
	providedIn: 'root'
})
export class DaffShippingAddressGuard implements CanActivate {
  constructor(
		private facade: DaffCartFacade,
		private router: Router,
		@Inject(DaffCartShippingAddressGuardRedirectUrl) private redirectUrl: string 
	) {}

  canActivate(): Observable<boolean> {
    return this.facade.hasShippingAddress$.pipe(
			tap(hasShippingAddress => {
				if(!hasShippingAddress) {
					this.router.navigateByUrl(this.redirectUrl)
				}
			})
		)
  }
}
