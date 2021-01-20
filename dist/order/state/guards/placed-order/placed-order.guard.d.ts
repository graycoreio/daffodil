import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DaffOrderFacade } from '../../facades/order/order.facade';
/**
 * A routing guard that will redirect to a given url if the placed order is not defined.
 * The url is `/` by default, but can be overridden with the DaffPlacedOrderGuardRedirectUrl injection token.
 */
export declare class DaffPlacedOrderGuard implements CanActivate {
    private facade;
    private router;
    private redirectUrl;
    constructor(facade: DaffOrderFacade, router: Router, redirectUrl: string);
    canActivate(): Observable<boolean>;
}
