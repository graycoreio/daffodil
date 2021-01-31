import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
  tap,
  take,
} from 'rxjs/operators';

import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartBillingAddressGuardRedirectUrl } from './billing-address-guard-redirect.token';

/**
 * A routing guard that will redirect to a given url if the billing address on the cart is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartBillingAddressGuardRedirectUrl injection token.
 * The guard will not wait until the cart has been resolved before performing the check and emitting.
 * Ensure that the cart is resolved prior to running this guard with the {@link DaffResolvedCartGuard}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffBillingAddressGuard implements CanActivate {
  constructor(
		private facade: DaffCartFacade,
		private router: Router,
		@Inject(DaffCartBillingAddressGuardRedirectUrl) private redirectUrl: string,
  ) {}

  canActivate(): Observable<boolean> {
    return this.facade.hasBillingAddress$.pipe(
      take(1),
      tap(hasBillingAddress => {
        if (!hasBillingAddress) {
          this.router.navigateByUrl(this.redirectUrl);
        }
      }),
    );
  }
}
