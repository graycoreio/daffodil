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
  map,
} from 'rxjs/operators';

import { DaffCartFacade } from '@daffodil/cart/state';

import { DaffCartInStockItemsGuardRedirectUrl } from './in-stock-items-guard-redirect.token';

/**
 * A routing guard that will ensure that the cart has only in-stock items before allowing activation of a route.
 * If the cart has any out of stock items in it, then `canActivate` will emit `false` and redirect to a specific path.
 * The url is `/` by default but can be overridden with the {@link DaffCartInStockItemsGuardRedirectUrl} injection token.
 * The guard will not wait until the cart has been resolved before performing the check and emitting.
 * Ensure that the cart is resolved prior to running this guard with the {@link DaffResolvedCartGuard}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCartInStockItemsGuard implements CanActivate {
  constructor(
		private facade: DaffCartFacade,
		private router: Router,
		@Inject(DaffCartInStockItemsGuardRedirectUrl) private redirectUrl: string,
  ) {}

  canActivate(): Observable<boolean> {
    return this.facade.hasOutOfStockItems$.pipe(
      map(hasOutOfStockItems => !hasOutOfStockItems),
      take(1),
      tap(hasNoOutOfStockItems => {
        if (!hasNoOutOfStockItems) {
          this.router.navigateByUrl(this.redirectUrl);
        }
      }),
    );
  }
}
