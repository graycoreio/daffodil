import { Actions } from '@ngrx/effects';
import { DaffCart, DaffCartCoupon, DaffCartStorageService } from '@daffodil/cart';
import { DaffCartCouponServiceInterface } from '@daffodil/cart/driver';
import { DaffCartCouponListSuccess, DaffCartCouponListFailure, DaffCartCouponRemoveSuccess, DaffCartCouponRemoveFailure, DaffCartCouponRemoveAllSuccess, DaffCartCouponRemoveAllFailure, DaffCartCouponApplySuccess, DaffCartCouponApplyFailure, DaffCartStorageFailure } from '../actions/public_api';
export declare class DaffCartCouponEffects<T extends DaffCart = DaffCart, V extends DaffCartCoupon = DaffCartCoupon> {
    private actions$;
    private errorMatcher;
    private driver;
    private storage;
    constructor(actions$: Actions, errorMatcher: Function, driver: DaffCartCouponServiceInterface<T, V>, storage: DaffCartStorageService);
    apply$: import("rxjs").Observable<DaffCartStorageFailure | DaffCartCouponApplyFailure | DaffCartCouponApplySuccess<T>>;
    list$: import("rxjs").Observable<DaffCartStorageFailure | DaffCartCouponListFailure | DaffCartCouponListSuccess<V>>;
    remove$: import("rxjs").Observable<DaffCartStorageFailure | DaffCartCouponRemoveFailure | DaffCartCouponRemoveSuccess<T>>;
    removeAll$: import("rxjs").Observable<DaffCartStorageFailure | DaffCartCouponRemoveAllFailure | DaffCartCouponRemoveAllSuccess<T>>;
}
