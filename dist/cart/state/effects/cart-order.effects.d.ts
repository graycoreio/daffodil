import { Actions } from '@ngrx/effects';
import { DaffCart, DaffCartPaymentMethod, DaffCartOrderResult, DaffCartStorageService } from '@daffodil/cart';
import { DaffCartOrderServiceInterface } from '@daffodil/cart/driver';
import { DaffCartPlaceOrderSuccess, DaffCartPlaceOrderFailure, DaffCartStorageFailure, DaffCartCreate } from '../actions/public_api';
export declare class DaffCartOrderEffects<T extends DaffCart = DaffCart, V extends DaffCartPaymentMethod = DaffCartPaymentMethod, R extends DaffCartOrderResult = DaffCartOrderResult> {
    private actions$;
    private errorMatcher;
    private driver;
    private storage;
    constructor(actions$: Actions, errorMatcher: Function, driver: DaffCartOrderServiceInterface<T, V, R>, storage: DaffCartStorageService);
    placeOrder$: import("rxjs").Observable<DaffCartStorageFailure | DaffCartPlaceOrderFailure | DaffCartPlaceOrderSuccess<R>>;
    resetCart$: import("rxjs").Observable<DaffCartCreate>;
}
