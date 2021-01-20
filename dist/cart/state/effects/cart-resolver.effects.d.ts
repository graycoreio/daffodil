import { Actions, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DaffCart, DaffCartStorageService } from '@daffodil/cart';
import { DaffCartServiceInterface } from '@daffodil/cart/driver';
/**
 * An effect for resolving a guest cart for a customer.
 * It will:
 * 1. Check storage for an id, and retrieve the cart if it exists.
 * 2. If a cart doesn't exist, it will attempt to create a new cart exactly once.
 * 3. If the cart resolution fails, it will bailout.
 */
export declare class DaffCartResolverEffects<T extends DaffCart = DaffCart> implements OnInitEffects {
    private actions$;
    private errorMatcher;
    private cartStorage;
    private driver;
    constructor(actions$: Actions, errorMatcher: Function, cartStorage: DaffCartStorageService, driver: DaffCartServiceInterface<T>);
    ngrxOnInitEffects(): Action;
    onResolveCart: () => Observable<Action>;
}
