import {
  Injectable,
  Inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  tap,
  take,
} from 'rxjs/operators';

import { DaffCartFacade } from '@daffodil/cart/state';

import { DaffCartShippingAddressGuardRedirectUrl } from './shipping-address-guard-redirect.token';

/**
 * A routing guard that will redirect to a given url if the shipping address on the cart is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartShippingAddressGuardRedirectUrl injection token.
 * The guard will not wait until the cart has been resolved before performing the check and emitting.
 * Ensure that the cart is resolved prior to running this guard with the {@link DaffResolvedCartGuard}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffShippingAddressGuard  {
  constructor(
    private facade: DaffCartFacade,
    private router: Router,
    @Inject(DaffCartShippingAddressGuardRedirectUrl) private redirectUrl: string,
  ) {}

  canActivate(): Observable<boolean> {
    return this.facade.hasShippingAddress$.pipe(
      take(1),
      tap(hasShippingAddress => {
        if (!hasShippingAddress) {
          this.router.navigateByUrl(this.redirectUrl);
        }
      }),
    );
  }
}
