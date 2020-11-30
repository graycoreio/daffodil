import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { tap, filter, switchMapTo, take, map } from 'rxjs/operators';

import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffResolvedCartGuardRedirectUrl } from './resolved-cart-guard-redirect.token';
import { DaffResolveCart } from '../../actions/public_api';

/**
 * A routing guard that will redirect to a given url if the cart is not properly resolved.
 * It will initiate cart resolution.
 * The url is `/` by default, but can be overridden with the {@link DaffResolvedCartGuardRedirectUrl} injection token.
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
      filter(resolved => resolved),
      switchMapTo(this.facade.id$),
      map(id => !!id),
      take(1),
			tap(id => {
				if (!id) {
					this.router.navigateByUrl(this.redirectUrl)
				}
			})
		)
  }
}
