import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DaffCartFacade } from '../../facades/cart/cart.facade';
/**
 * A routing guard that will redirect to a given url if the cart order result is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartOrderResultGuardRedirectUrl injection token.
 */
export declare class DaffOrderResultGuard implements CanActivate {
    private facade;
    private router;
    private redirectUrl;
    constructor(facade: DaffCartFacade, router: Router, redirectUrl: string);
    canActivate(): Observable<boolean>;
}
