import { Injectable, Inject } from '@angular/core';
import { Action } from '@ngrx/store';
import { Resolve, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { DaffCartResolver } from './cart-resolver.service';
import { DaffCartLoadSuccess, DaffCartActionTypes } from '../actions/public_api';
import { DaffEmptyCartResolverRedirectUrl } from './tokens/empty-cart-resolver-redirect.token';

/**
 * Redirects to the url provided by the DaffEmptyCartResolverRedirectUrl injection token when the 
 * cart is empty after successfully loading.
 */
@Injectable()
export class DaffEmptyCartResolver implements Resolve<Observable<Action>> {
  constructor(
		private cartResolver: DaffCartResolver, 
		private router: Router,
		@Inject(DaffEmptyCartResolverRedirectUrl) private redirectUrl: string
	) {}

  resolve(): Observable<Action> {
		return this.cartResolver.resolve().pipe(
			filter(action => action.type === DaffCartActionTypes.CartLoadSuccessAction),
      switchMap((action: DaffCartLoadSuccess) => {
        if(!action.payload || action.payload.items.length === 0) {
          this.router.navigateByUrl(this.redirectUrl);
        }
        return of(action);
			})
		);
  }
}
