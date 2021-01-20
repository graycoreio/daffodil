import { Actions } from '@ngrx/effects';
import { DaffCartPaymentMethod, DaffCart, DaffCartAddress, DaffCartStorageService } from '@daffodil/cart';
import { DaffCartPaymentServiceInterface } from '@daffodil/cart/driver';
import { DaffCartPaymentLoadSuccess, DaffCartPaymentLoadFailure, DaffCartPaymentRemoveSuccess, DaffCartPaymentRemoveFailure, DaffCartPaymentUpdateSuccess, DaffCartPaymentUpdateFailure, DaffCartPaymentUpdateWithBillingSuccess, DaffCartPaymentUpdateWithBillingFailure } from '../actions/public_api';
export declare class DaffCartPaymentEffects<T extends DaffCartPaymentMethod = DaffCartPaymentMethod, V extends DaffCart = DaffCart, R extends DaffCartAddress = DaffCartAddress> {
    private actions$;
    private errorMatcher;
    private driver;
    private storage;
    constructor(actions$: Actions, errorMatcher: Function, driver: DaffCartPaymentServiceInterface<T, V, R>, storage: DaffCartStorageService);
    get$: import("rxjs").Observable<DaffCartPaymentLoadFailure | DaffCartPaymentLoadSuccess<T>>;
    update$: import("rxjs").Observable<DaffCartPaymentUpdateFailure | DaffCartPaymentUpdateSuccess<{
        id: string | number;
        subtotal: number;
        grand_total: number;
        coupons: import("../../../../../dist/cart/daffodil-cart").DaffCartCoupon[];
        items: import("../../../../../dist/cart/daffodil-cart").DaffCartItem[];
        billing_address: DaffCartAddress;
        shipping_address: DaffCartAddress;
        payment: DaffCartPaymentMethod;
        totals: import("../../../../../dist/cart/daffodil-cart").DaffCartTotal[];
        shipping_information: import("../../../../../dist/cart/daffodil-cart").DaffCartShippingInformation;
        available_shipping_methods: import("../../../../../dist/cart/daffodil-cart").DaffCartShippingRate[];
        available_payment_methods: DaffCartPaymentMethod[];
        extra_attributes: any;
    }>>;
    updateWithBilling$: import("rxjs").Observable<DaffCartPaymentUpdateWithBillingFailure | DaffCartPaymentUpdateWithBillingSuccess<V>>;
    remove$: import("rxjs").Observable<DaffCartPaymentRemoveSuccess | DaffCartPaymentRemoveFailure>;
}
