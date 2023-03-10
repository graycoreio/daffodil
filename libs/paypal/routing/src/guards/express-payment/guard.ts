import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffPaypalExpressPaymentRequest,
  DAFF_PAYPAL_PAYMENT_KIND,
} from '@daffodil/paypal';
import {
  DaffPaypalExpressDriverConfig,
  DAFF_PAYPAL_EXPRESS_DRIVER_CONFIG,
} from '@daffodil/paypal/driver';
import {
  DaffPaypalApplyPayment,
  DaffPaypalStateRootSlice,
} from '@daffodil/paypal/state';

/**
 * A routing guard that will apply a paypal express payment with the given token and payer ID.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffPaypalExpressApplyPaymentGuard implements CanActivate {
  constructor(
    private store: Store<DaffPaypalStateRootSlice>,
    @Inject(DAFF_PAYPAL_EXPRESS_DRIVER_CONFIG) private config: DaffPaypalExpressDriverConfig,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    this.store.dispatch(new DaffPaypalApplyPayment<DaffPaypalExpressPaymentRequest>({
      kind: DAFF_PAYPAL_PAYMENT_KIND,
      data: {
        token: route.queryParamMap.get(this.config.params.token),
        payerId: route.queryParamMap.get(this.config.params.payerId),
      },
    }));

    return of(true);
  }
}
