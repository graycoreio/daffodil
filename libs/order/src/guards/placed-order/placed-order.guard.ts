import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { tap } from 'rxjs/operators';

import { DaffOrderFacade } from '../../facades/order/order.facade';
import { DaffPlacedOrderGuardRedirectUrl } from './placed-order-guard-redirect.token';

/**
 * A routing guard that will redirect to a given url if the placed order is not defined.
 * The url is `/` by default, but can be overridden with the DaffPlacedOrderGuardRedirectUrl injection token.
 */
@Injectable({
	providedIn: 'root'
})
export class DaffPlacedOrderGuard implements CanActivate {
  constructor(
		private facade: DaffOrderFacade,
		private router: Router,
		@Inject(DaffPlacedOrderGuardRedirectUrl) private redirectUrl: string
	) {}

  canActivate(): Observable<boolean> {
    return this.facade.hasPlacedOrder$.pipe(
			tap(hasPlacedOrder => {
				if (!hasPlacedOrder) {
					this.router.navigateByUrl(this.redirectUrl)
				}
			})
		)
  }
}
