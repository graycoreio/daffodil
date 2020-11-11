import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { tap } from 'rxjs/operators';

import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartOrderResultGuardRedirectUrl } from './order-result-guard-redirect.token';

/**
 * A routing guard that will redirect to a given url if the cart order result is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartOrderResultGuardRedirectUrl injection token.
 */
@Injectable({
	providedIn: 'root'
})
export class DaffOrderResultGuard implements CanActivate {
  constructor(
		private facade: DaffCartFacade,
		private router: Router,
		@Inject(DaffCartOrderResultGuardRedirectUrl) private redirectUrl: string
	) {}

  canActivate(): Observable<boolean> {
    return this.facade.hasOrderResult$.pipe(
			tap(hasOrderResult => {
				if (!hasOrderResult) {
					this.router.navigateByUrl(this.redirectUrl)
				}
			})
    )
  }
}
