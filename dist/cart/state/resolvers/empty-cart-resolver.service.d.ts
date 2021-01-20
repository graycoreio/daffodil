import { Action } from '@ngrx/store';
import { Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DaffCartResolver } from './cart-resolver.service';
/**
 * Resolves the cart before navigation. Redirects to a given url when a failure occurs during Cart Load.
 * This url is `/` by default but can be overridden with the DaffCartResolverRedirectUrl injection token.
 * This resolver also redirects to a different url when the cart is empty after successfully loading.
 * This url is also `/` by default, but can be overridden with the DaffEmptyCartResolverRedirectUrl
 */
export declare class DaffEmptyCartResolver implements Resolve<Observable<Action>> {
    private cartResolver;
    private router;
    private redirectUrl;
    constructor(cartResolver: DaffCartResolver, router: Router, redirectUrl: string);
    resolve(): Observable<Action>;
}
