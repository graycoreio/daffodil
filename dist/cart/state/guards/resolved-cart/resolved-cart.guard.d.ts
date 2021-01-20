import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartStateConfiguration } from '../../config/config';
/**
 * A routing guard that will optionally redirect to a given url if the cart is not properly resolved.
 * It will initiate cart resolution.
 * The url has no default and the guard will not redirect if no value is specified.
 * Specify a redirect path with the {@link DaffResolvedCartGuardRedirectUrl} injection token.
 * The guard will wait until the cart has been resolved before performing the check and emitting.
 */
export declare class DaffResolvedCartGuard implements CanActivate {
    private facade;
    private router;
    private config;
    constructor(facade: DaffCartFacade, router: Router, config: DaffCartStateConfiguration);
    canActivate(): Observable<boolean | UrlTree>;
}
