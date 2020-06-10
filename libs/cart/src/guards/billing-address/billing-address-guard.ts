import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { tap } from 'rxjs/operators';

import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartBillingAddressGuardRedirectUrl } from './billing-address-guard-redirect.token';

@Injectable({
	providedIn: 'root'
})
export class DaffBillingAddressGuard implements CanActivate {
  constructor(
		private facade: DaffCartFacade,
		private router: Router,
		@Inject(DaffCartBillingAddressGuardRedirectUrl) private redirectUrl: string 
	) {}

  canActivate(): Observable<boolean> {
    return this.facade.hasBillingAddress$.pipe(
			tap(hasBillingAddress => {
				if(!hasBillingAddress) {
					this.router.navigateByUrl(this.redirectUrl)
				}
			})
		)
  }
}
