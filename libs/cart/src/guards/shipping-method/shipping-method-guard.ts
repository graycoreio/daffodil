import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { tap } from 'rxjs/operators';

import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartShippingMethodGuardRedirectUrl } from './shipping-method-guard-redirect.token';

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
    return this.facade.hasShippingMethod$.pipe(
			tap(hasShippingMethod => {
				if(!hasShippingMethod) {
					this.router.navigateByUrl(this.redirectUrl)
				}
			})
		)
  }
}
