import { Injectable, Inject } from '@angular/core';
import { Action } from '@ngrx/store';
import { Resolve, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { DaffCartResolver } from './cart-resolver.service';
import { DaffCartLoadSuccess, DaffCartActionTypes } from '../actions/public_api';
import { DaffEmptyCartResolverRedirectUrl } from './tokens/empty-cart-resolver-redirect.token';

/**
 * Resolves the cart before navigation. Redirects to a given url when a failure occurs during Cart Load.
 * This url is `/` by default but can be overridden with the DaffCartResolverRedirectUrl injection token.
 * This resolver also redirects to a different url when the cart is empty after successfully loading. 
 * This url is also `/` by default, but can be overridden with the DaffEmptyCartResolverRedirectUrl
 */
@Injectable({
	providedIn: 'root'
})
export class DaffEmptyCartResolver implements Resolve<Observable<Action>> {
  constructor(
		private cartResolver: DaffCartResolver, 
		private router: Router,
		@Inject(DaffEmptyCartResolverRedirectUrl) private redirectUrl: string
	) {}

  resolve(): Observable<Action> {
		return this.cartResolver.resolve().pipe(
			filter(action => action.type === DaffCartActionTypes.CartLoadSuccessAction),
      map((action: DaffCartLoadSuccess) => {
        if(!action.payload || action.payload.items.length === 0) {
          this.router.navigateByUrl(this.redirectUrl);
        }
        return action;
			})
		);
  }
}
