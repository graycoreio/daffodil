import { Actions } from '@ngrx/effects';
import { DaffCartPaymentMethod, DaffCartStorageService } from '@daffodil/cart';
import { DaffCartPaymentMethodsServiceInterface } from '@daffodil/cart/driver';
import { DaffCartPaymentMethodsLoadSuccess, DaffCartPaymentMethodsLoadFailure } from '../actions/public_api';
export declare class DaffCartPaymentMethodsEffects<T extends DaffCartPaymentMethod> {
    private actions$;
    private errorMatcher;
    private driver;
    private storage;
    constructor(actions$: Actions, errorMatcher: Function, driver: DaffCartPaymentMethodsServiceInterface<T>, storage: DaffCartStorageService);
    list$: import("rxjs").Observable<DaffCartPaymentMethodsLoadFailure | DaffCartPaymentMethodsLoadSuccess<T>>;
}
