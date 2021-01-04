import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { tap, filter, take, map } from 'rxjs/operators';

import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartResolveState } from '../../reducers/public_api';
import {
	DaffCartStateConfiguration,
	DAFF_CART_STATE_CONFIG,
} from '../../config/config';

/**
 * A routing guard that will optionally redirect to a given url if the cart is not properly resolved.
 * It will initiate cart resolution.
 * The url has no default and the guard will not redirect if no value is specified.
 * Specify a redirect path with the {@link DaffResolvedCartGuardRedirectUrl} injection token.
 * The guard will wait until the cart has been resolved before performing the check and emitting.
 */
@Injectable({
	providedIn: 'root',
})
export class DaffResolvedCartGuard implements CanActivate {
	constructor(
		private facade: DaffCartFacade,
		private router: Router,
		@Inject(DAFF_CART_STATE_CONFIG) private config: DaffCartStateConfiguration,
	) {}

	canActivate(): Observable<boolean | UrlTree> {
		return this.facade.resolved$.pipe(
			filter(
				resolvedState =>
					resolvedState === DaffCartResolveState.Succeeded ||
					resolvedState === DaffCartResolveState.ServerSide ||
					resolvedState === DaffCartResolveState.Failed,
			),
			map(
				resolvedState =>
					resolvedState === DaffCartResolveState.Succeeded ||
					resolvedState === DaffCartResolveState.ServerSide,
			),
			take(1),
			map(success => 
					!success && this.config.resolution.failedResolutionPath 
						?	this.router.parseUrl(
								this.config.resolution.failedResolutionPath,
							)
						: success
			),
		);
	}
}
