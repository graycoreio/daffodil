import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';

import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartShippingAddressGuardRedirectUrl } from './shipping-address-guard-redirect.token';

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
			map(hasShippingAddress => {
				if(!hasShippingAddress) {
					this.router.navigateByUrl(this.redirectUrl)
				}
				return hasShippingAddress;
			})
		)
  }
}
