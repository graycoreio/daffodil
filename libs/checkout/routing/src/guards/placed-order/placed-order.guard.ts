import {
  Injectable,
  Inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { DaffCheckoutPlacedOrderFacade } from '@daffodil/checkout/state';

import { DaffCheckoutPlacedOrderGuardRedirectUrl } from './placed-order-guard-redirect.token';

/**
 * A routing guard that will redirect to a given url if the placed order is not defined.
 * The url is `/` by default, but can be overridden with the DaffCheckoutPlacedOrderGuardRedirectUrl injection token.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCheckoutPlacedOrderGuard  {
  constructor(
    private facade: DaffCheckoutPlacedOrderFacade,
    private router: Router,
    @Inject(DaffCheckoutPlacedOrderGuardRedirectUrl) private redirectUrl: string,
  ) {}

  canActivate(): Observable<boolean> {
    return this.facade.hasPlacedOrder$.pipe(
      tap(hasPlacedOrder => {
        if (!hasPlacedOrder) {
          this.router.navigateByUrl(this.redirectUrl);
        }
      }),
    );
  }
}
