import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DaffCartFacade } from '../../facades/cart/cart.facade';
/**
 * A routing guard that will redirect to a given url if the shipping method on the cart is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartShippingMethodGuardRedirectUrl injection token.
 * The guard will not wait until the cart has been resolved before performing the check and emitting.
 * Ensure that the cart is resolved prior to running this guard with the {@link DaffResolvedCartGuard}.
 */
export declare class DaffShippingMethodGuard implements CanActivate {
    private facade;
    private router;
    private redirectUrl;
    constructor(facade: DaffCartFacade, router: Router, redirectUrl: string);
    canActivate(): Observable<boolean>;
}
