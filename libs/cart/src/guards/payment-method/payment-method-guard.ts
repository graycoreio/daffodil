import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';

import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartPaymentMethodGuardRedirectUrl } from './payment-method-guard-redirect.token';

@Injectable()
export class DaffPaymentMethodGuard implements CanActivate {
  constructor(
		private facade: DaffCartFacade,
		private router: Router,
		@Inject(DaffCartPaymentMethodGuardRedirectUrl) private redirectUrl: string 
	) {}

  canActivate(): Observable<boolean> {
    return this.facade.hasPaymentMethod$.pipe(
			map(hasPaymentMethod => {
				if(!hasPaymentMethod) {
					this.router.navigateByUrl(this.redirectUrl)
				}
				return hasPaymentMethod;
			})
		)
  }
}
