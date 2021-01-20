import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DaffCartFacade } from '../../facades/cart/cart.facade';
/**
 * A routing guard that will ensure that the cart is not empty before allowing activation of a route.
 * If the cart has items in it, then `canActivate` will emit true. If not, it will emit false and redirect to a specific path.
 * The url is `/` by default but can be overridden with the {@link DaffCartItemsGuardRedirectUrl} injection token.
 * The guard will not wait until the cart has been resolved before performing the check and emitting.
 * Ensure that the cart is resolved prior to running this guard with the {@link DaffResolvedCartGuard}.
 */
export declare class DaffCartItemsGuard implements CanActivate {
    private facade;
    private router;
    private redirectUrl;
    constructor(facade: DaffCartFacade, router: Router, redirectUrl: string);
    canActivate(): Observable<boolean>;
}
