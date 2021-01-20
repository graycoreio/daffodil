import { Actions } from '@ngrx/effects';
import { DaffCart, DaffCartStorageService } from '@daffodil/cart';
import { DaffCartServiceInterface } from '@daffodil/cart/driver';
import { DaffCartLoadSuccess, DaffCartLoadFailure, DaffAddToCartSuccess, DaffAddToCartFailure, DaffCartClearSuccess, DaffCartClearFailure, DaffCartCreateSuccess, DaffCartCreateFailure, DaffCartStorageFailure } from '../actions/public_api';
export declare class DaffCartEffects<T extends DaffCart> {
    private actions$;
    private errorMatcher;
    private driver;
    private storage;
    constructor(actions$: Actions, errorMatcher: Function, driver: DaffCartServiceInterface<T>, storage: DaffCartStorageService);
    create$: import("rxjs").Observable<DaffCartCreateFailure | DaffCartCreateSuccess<T>>;
    storeId$: import("rxjs").Observable<DaffCartStorageFailure>;
    get$: import("rxjs").Observable<DaffCartStorageFailure | DaffCartLoadFailure | DaffCartLoadSuccess<T>>;
    addToCart$: import("rxjs").Observable<DaffAddToCartSuccess | DaffAddToCartFailure>;
    clear$: import("rxjs").Observable<DaffCartStorageFailure | DaffCartClearFailure | DaffCartClearSuccess<{
        id: string | number;
        subtotal: number;
        grand_total: number;
        coupons: import("../../../../../dist/cart/daffodil-cart").DaffCartCoupon[];
        items: import("../../../../../dist/cart/daffodil-cart").DaffCartItem[];
        billing_address: import("../../../../../dist/cart/daffodil-cart").DaffCartAddress;
        shipping_address: import("../../../../../dist/cart/daffodil-cart").DaffCartAddress;
        payment: import("../../../../../dist/cart/daffodil-cart").DaffCartPaymentMethod;
        totals: import("../../../../../dist/cart/daffodil-cart").DaffCartTotal[];
        shipping_information: import("../../../../../dist/cart/daffodil-cart").DaffCartShippingInformation;
        available_shipping_methods: import("../../../../../dist/cart/daffodil-cart").DaffCartShippingRate[];
        available_payment_methods: import("../../../../../dist/cart/daffodil-cart").DaffCartPaymentMethod[];
        extra_attributes: any;
    }>>;
}
