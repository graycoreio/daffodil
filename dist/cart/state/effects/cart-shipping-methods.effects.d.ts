import { Actions } from '@ngrx/effects';
import { DaffCartShippingRate, DaffCartStorageService } from '@daffodil/cart';
import { DaffCartShippingMethodsServiceInterface } from '@daffodil/cart/driver';
import { DaffCartShippingMethodsLoadSuccess, DaffCartShippingMethodsLoadFailure } from '../actions/public_api';
export declare class DaffCartShippingMethodsEffects<T extends DaffCartShippingRate> {
    private actions$;
    private errorMatcher;
    private driver;
    private storage;
    constructor(actions$: Actions, errorMatcher: Function, driver: DaffCartShippingMethodsServiceInterface<T>, storage: DaffCartStorageService);
    list$: import("rxjs").Observable<DaffCartShippingMethodsLoadFailure | DaffCartShippingMethodsLoadSuccess<T>>;
}
